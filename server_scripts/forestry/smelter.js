ServerEvents.recipes(event => {

	event.remove({type: "forestry:smelter"})
    let smelter = (output, amount3, input1, amount1, input2, amount2) => {
		event.custom({
			"type": "forestry:smelter",
			"inputs": [
			  {
			    "count": amount1,
			    "ingredient": {
			      "item": input1
			    }
			  },
			  {
			    "count": amount2,
			    "ingredient": {
			      "item": input2
			    }
			  }
			],
			"output": {
			  "count": amount3,
			  "ingredient": {
			    "item": output
			  }
			},
			"processingTime": 40,
			"temperature": 0
		})
	}

	smelter("create:andesite_alloy", 4, 
		"tconstruct:seared_stone", 1, 
		"minecraft:iron_ingot", 1
	)

	smelter("thermal:electrum_ingot", 2, 
		"minecraft:gold_ingot", 1, 
		"thermal:silver_ingot", 1
	)

})