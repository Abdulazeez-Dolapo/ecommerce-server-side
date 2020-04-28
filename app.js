require("dotenv").config()
const express = require("express")
const { sequelize } = require("./models/database")
const users = require("./routes/users")
const products = require("./routes/product")
const app = express()

app.use("/user", users)
app.use("/product", products)

sequelize.sync().then(() => {
	app.listen(process.env.PORT)
	console.log(`Server started on port ${process.env.PORT}`)
})
