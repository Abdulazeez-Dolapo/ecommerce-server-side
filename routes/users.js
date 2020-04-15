const express = require("express")
const router = express.Router()
const User = require("../models/User")

router.get("/users", (req, res) => {
	User.findAll()
		.then((users) => {
			const arr = []
			users.forEach((user) => {
				let obj = {
					id: user.id,
					name: user.name,
					username: user.username,
					email: user.email,
					address: {
						street: user.street,
						suite: user.suite,
						city: user.city,
						zipcode: user.zipcode,
						geo: {
							lat: user.lat,
							lng: user.lng,
						},
					},
					phone: user.phone,
					website: user.website,
					company: {
						name: user.company_name,
						catchPhrase: user.catch_phrase,
						bs: user.bs,
					},
				}
				arr.push(obj)
			})

			res.json(arr)
		})
		.catch((err) => {
			console.log(err)
		})
})

module.exports = router
