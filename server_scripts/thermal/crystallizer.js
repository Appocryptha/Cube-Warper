ServerEvents.recipes(event => {

	let crystallizer = (Fluid, Input, Output) => {

        Input = Input || []		

		event.custom({
		  "type": "thermal:crystallizer",
		  "ingredients": [
		    {
		      "fluid": Fluid,
		      "amount": 200
		    },
		  	Input
		  	],
		  	"result": [
		    {
		      "item": Output
		    }
        ],
	      "energy": 500
		})
	}
	
    event.remove({output: 'ae2:fluix_crystal'})
	crystallizer(
		"minecraft:water",
		[
			{"item": "ae2:charged_certus_quartz_crystal"},
			{"item": "ae2:sky_dust"},
		],
		"ae2:fluix_crystal"
	)

	crystallizer(
		"minecraft:water",
		[
			{"item": "kubejs:vector_operator_empty"},
			{"item": "ae2:fluix_dust"},
		],
		"kubejs:vector_operator_fluix"
	)

    event.remove({output: 'create:rose_quartz'})
	crystallizer(
		"untagged_mobs:fluid_blood",
		[
			{"item": "thermal:quartz_dust"},
		],
		"create:rose_quartz"
	)

})