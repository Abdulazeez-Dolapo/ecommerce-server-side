require("dotenv").config()
const express = require("express")
const { sequelize } = require("./models/database")
const users = require("./routes/users")
const app = express()

app.use("/api", users)

sequelize.sync().then(() => {
	app.listen(process.env.PORT)
	console.log(`Server started on port ${process.env.PORT}`)
})
