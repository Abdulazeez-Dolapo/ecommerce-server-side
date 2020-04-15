const Sequelize = require("sequelize")
const options = {
	dialect: "mysql",
	host: "localhost",
}

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASS,
	options
)

const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
