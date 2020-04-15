const Sequelize = require("sequelize")
const db = require("./database")

module.exports = db.sequelize.define("users", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		unique: true,
	},
	name: {
		type: Sequelize.STRING,
	},
	username: {
		type: Sequelize.STRING,
	},
	email: {
		type: Sequelize.STRING,
		unique: true,
	},
	street: {
		type: Sequelize.STRING,
	},
	suite: {
		type: Sequelize.STRING,
	},
	city: {
		type: Sequelize.STRING,
	},
	zipcode: {
		type: Sequelize.STRING,
	},
	lat: {
		type: Sequelize.STRING,
	},
	lng: {
		type: Sequelize.STRING,
	},
	phone: {
		type: Sequelize.STRING,
	},
	website: {
		type: Sequelize.STRING,
	},
	company_name: {
		type: Sequelize.STRING,
	},
	catch_phrase: {
		type: Sequelize.STRING,
	},
	bs: {
		type: Sequelize.STRING,
	},
	createdAt: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW,
	},
	updatedAt: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW,
	},
})
