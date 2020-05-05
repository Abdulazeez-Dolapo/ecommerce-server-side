require("dotenv").config()
const express = require("express")
const { sequelize } = require("./models/database")
const users = require("./routes/users")
const products = require("./routes/products")
const orders = require("./routes/orders")
const app = express()

app.use("/users", users)
app.use("/products", products)
app.use("/orders", orders)

sequelize.sync().then(() => {
	app.listen(process.env.PORT)
	console.log(`Server started on port ${process.env.PORT}`)
})
