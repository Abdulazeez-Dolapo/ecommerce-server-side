const Sequelize = require("sequelize")
const db = require("./database")

module.exports = db.sequelize.define("orders", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		unique: true,
	},
	order_id: {
		unique: true,
		type: Sequelize.STRING,
	},
	client_id: {
		type: Sequelize.STRING,
	},
	order_date: {
		type: Sequelize.DATE,
	},
	status: {
		type: Sequelize.TINYINT,
	},
	comments: {
		type: Sequelize.STRING,
	},
	shipped_date: {
		type: Sequelize.DATE,
	},
	shipper_id: {
		type: Sequelize.SMALLINT,
	},
})
