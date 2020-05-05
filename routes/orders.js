const express = require("express")
const router = express.Router()
const Order = require("../models/Order")

router.get("/orders", (req, res) => {
	Order.findAll()
		.then(orders => {
			res.send({ orders })
		})
		.catch(err => {
			console.log(err)
			res.status(404).json({ error: "Orders not found" })
		})
})

router.get("/order/:id", (req, res) => {
	Order.findOne({
		where: {
			order_id: req.params.id,
		},
	})
		.then(order => {
			if (!order) {
				return res.status(404).send({
					error: "Order not found",
				})
			} else {
				res.send({
					order,
				})
			}
		})
		.catch(err => {
			res.status(404).json({ error: "Order not found" })
			console.log(err)
		})
})

router.post("/create", (req, res) => {
	Order.create(req.body)
		.then(order => {
			res.send({
				order,
				message: "Order added",
			})
		})
		.catch(err => {
			res.status(400).json({ error: "Order could not be added" })
			console.log(err)
		})
})

router.delete("/delete/:id", (req, res) => {
	Order.destroy({
		where: {
			order_id: req.params.id,
		},
	})
	res.status(200)
		.json({
			message: "order deleted",
		})
		.catch(error => {
			console.log(error)
			res.status(400).send({
				error: "order could not be deleted",
			})
		})
})

router.post("/update/:id", (req, res) => {
	Order.update(
		{
			status: req.body.status,
			comments: req.body.comments,
			shipped_date: req.body.shipped_date,
			shipper_id: req.body.shipper_id,
		},
		{
			where: {
				order_id: req.body.order_id,
			},
		}
	)
		.then(order => {
			res.send({
				order,
				message: "Order updated",
			})
		})
		.catch(error => {
			console.log(error)
			res.status(400).send({
				error: "Order could not be updated",
			})
		})
})

module.exports = router
