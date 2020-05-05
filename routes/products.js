const express = require("express")
const router = express.Router()
const Product = require("../models/Product")

router.get("/products", (req, res) => {
	Product.findAll()
		.then(products => {
			res.send({ products })
		})
		.catch(err => {
			console.log(err)
			res.status(404).json({ error: "Products not found" })
		})
})

router.get("/product/:id", (req, res) => {
	Product.findOne({
		where: {
			product_id: req.params.id,
		},
	})
		.then(product => {
			if (!product) {
				return res.status(404).send({
					error: "Product not found",
				})
			} else {
				res.send({
					product,
				})
			}
		})
		.catch(err => {
			res.status(404).json({ error: "Product not found" })
			console.log(err)
		})
})

router.post("/create", (req, res) => {
	Product.create(req.body)
		.then(product => {
			res.send({
				product,
				message: "Product added",
			})
		})
		.catch(err => {
			res.status(400).json({ error: "Product could not be added" })
			console.log(err)
		})
})

router.delete("/delete/:id", (req, res) => {
	Product.destroy({
		where: {
			product_id: req.params.id,
		},
	})
	res.status(200)
		.json({
			message: "Product deleted",
		})
		.catch(error => {
			console.log(error)
			res.status(400).send({
				error: "Product could not be deleted",
			})
		})
})

router.post("/update/:id", (req, res) => {
	Product.update(
		{
			name: req.body.name,
			description: req.body.description,
			price: req.body.price,
		},
		{
			where: {
				product_id: req.body.product_id,
			},
		}
	)
		.then(product => {
			res.send({
				product,
				message: "Product updated",
			})
		})
		.catch(error => {
			console.log(error)
			res.status(400).send({
				error: "Product could not be updated",
			})
		})
})

module.exports = router
