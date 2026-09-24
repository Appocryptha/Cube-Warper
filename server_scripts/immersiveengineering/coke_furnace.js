ServerEvents.recipes(event => {


		event.custom({"type":"immersiveengineering:coke_oven",
			"creosote":500,
			"input":{"item":"minecraft:charcoal"},
			"result":{"tag":"forge:coal_coke"},
			"time":180
		})

		event.remove({id: 'immersiveengineering:coke_oven/coke'})
		event.custom({"type":"immersiveengineering:coke_oven",
			"creosote":500,
			"input":{"item":"minecraft:coal"},
			"result":{"tag":"forge:coal_coke"},
			"time":180
		})

})