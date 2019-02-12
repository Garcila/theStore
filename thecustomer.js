require(`dotenv`).config();
const inquirer = require(`inquirer`);
const mySqlConnection = require(`./connection`);

const connection = mySqlConnection.connection();

function showAllProducts() {
	connection.query(
		`SELECT id, product_name, round(price,2) as $ from products`,
		(err, res) => {
			if (err) throw err;
			start(res);
		}
	);
}

function notEnoughUnits(itemId, quantityInInventory) {
	inquirer
		.prompt([
			{
				name: `newQuantity`,
				type: `input`,
				message: `Sorry we only have ${quantityInInventory} available at the moment.\nPlease enter how many of the ${quantityInInventory} units available you want`,
				validate: (value) =>
					!isNaN(value) ? true : `Please enter a valid quantity`,
			},
		])
		.then(function(res) {
			console.log(res);
			quantityInInventory >= parseInt(res.newQuantity)
				? processOrder(itemId, res.newQuantity)
				: notEnoughUnits(itemId, res.newQuantity);
		});
}

function processOrder(
	itemId,
	quantity,
	quantityInInventory,
	price,
	product_name
) {
	let quantityAfterSale = quantityInInventory - quantity;
	let totalCost = quantity * price;
	connection.query(`UPDATE products SET stock_quantity = ? WHERE id = ?`, [
		quantityAfterSale,
		itemId,
	]);
	console.log(
    `
    _______________________________________________________________________

      A pleasure doing business with you.
      You have successfully place an order for:
      ${quantity} units of our ${product_name} at $${price} each
      The total value of your purchase is $${totalCost}
    _______________________________________________________________________
    
    `
  );
  connection.end();
}

function start(res) {
	console.table(res);
	inquirer
		.prompt([
			{
				name: `itemId`,
				type: `input`,
				message: `Hi Customer, please enter the ID of the product you wish to purchase`,
				validate: (value) => (!isNaN(value) ? true : `Please enter a valid ID`),
			},
			{
				name: `quantity`,
				type: `input`,
				message: `how many units would you like?`,
				validate: (value) =>
					!isNaN(value) ? true : `Please enter a valid quantity`,
			},
		])
		.then(function({ itemId, quantity }) {
			connection.query(
				`SELECT stock_quantity, price, product_name FROM products WHERE id = ?`,
				[ itemId ],
				(err, res) => {
					if (err) throw err;
					let quantityInInventory = res[0].stock_quantity;
					let price = res[0].price;
					let product_name = res[0].product_name;
					quantityInInventory >= quantity
						? processOrder(
								itemId,
								quantity,
								quantityInInventory,
								price,
								product_name
							)
						: notEnoughUnits(itemId, quantityInInventory);
				}
			);
		});
}
showAllProducts();
