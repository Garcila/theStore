require(`dotenv`).config();
const inquirer = require(`inquirer`);
const mySqlConnection = require(`./connection`);

const connection = mySqlConnection.connection();

function showAllProducts() {
	connection.query(
		`SELECT id, product_name, price from products`,
		(err, res) => {
      if (err) throw err;
      let items = [];
      res.forEach(i => items.push({name: `id:${i.id} -- ${i.product_name} -- $${parseFloat(i.price).toFixed(2)}`}));
			start(items);
		}
	);
}

function start(products) {
	inquirer
		.prompt({
			name: 'postOrBid',
			type: 'list',
			message: '🤖 Hi Customer, please select the product you wish to purchase 💰',
			choices: products,
		})
		.then(function(answer) {
			// based on their answer, either call the bid or the post functions
			if (answer.postOrBid === 'POST') {
				postAuction();
			} else if (answer.postOrBid === 'BID') {
				bidAuction();
			} else {
				connection.end();
			}
		});
}
showAllProducts();
