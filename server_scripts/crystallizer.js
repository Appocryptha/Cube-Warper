ServerEvents.recipes(event => {

	let crystallizer = (Input1, Input2, Output) => {
		event.custom({
		  "type": "thermal:crystallizer",
		  "ingredients": [
		    {
		      "fluid": "minecraft:water",
		      "amount": 200
		    },
		    {
		      "item": Input1
		    },
		    {
		      "item": Input2
		    }
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
		"ae2:charged_certus_quartz_crystal",
		"ae2:sky_dust",
		"ae2:fluix_crystal",
	)

	crystallizer(
		"kubejs:vector_operator_empty",
		"ae2:fluix_dust",
		"kubejs:vector_operator_fluix",
	)

})