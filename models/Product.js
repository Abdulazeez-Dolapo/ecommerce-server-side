const Sequelize = require("sequelize")
const db = require("./database")

module.exports = db.sequelize.define("products", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		unique: true,
	},
	product_id: {
		unique: true,
		type: Sequelize.STRING,
	},
	name: {
		type: Sequelize.STRING,
	},
	description: {
		type: Sequelize.STRING,
	},
	price: {
		type: Sequelize.STRING,
	},
})
