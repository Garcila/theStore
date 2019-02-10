require(`dotenv`).config();
const faker = require(`faker`);
const mySqlConnection = require(`./connection`);

function createFakeProduct() {
	let product = {
		product_name: `${faker.hacker.adjective()} ${faker.hacker.verb()} ${faker.commerce.product()}`,
		department_name: faker.commerce.department(),
		price: faker.finance.amount(),
		stock_quantity: faker.random.number(),
  };
  console.log(product);
	return product;
}

const connection = mySqlConnection.connection();

function insertProducts() {
	for (let i = 0; i < 20; i++) {
		let fakeProduct = createFakeProduct();
		connection.query(`INSERT INTO products SET ?`, fakeProduct, (err, res) => {
			if (err) throw err;
			console.log(res);
		});
	}
	connection.end();
}
insertProducts();
