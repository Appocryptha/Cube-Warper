ServerEvents.recipes(event => {

	//event.recipes.mekanismMetallurgicInfusing('thermal:electrum_ingot', 'thermal:silver_ingot', 'mekanism:gold', 160)

	event.custom({"type":"mekanism:metallurgic_infusing",
		"chemicalInput":{
			"amount":160,
			"tag":"mekanism:gold"
		},

		"itemInput":{
			"ingredient":{
				"item":"thermal:silver_ingot"
			}
		},

		"output":{
			"item":"thermal:electrum_ingot"
		}
	})


})