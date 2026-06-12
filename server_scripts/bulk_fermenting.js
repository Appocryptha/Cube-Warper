ServerEvents.recipes(event => {

	let bulk_fermenting = (Item1, Item2, Fluid, Amount, Output) => {
		event.custom({
		  "type": "createdieselgenerators:bulk_fermenting",
		  "ingredients": [
		    {
		      "fluid": Fluid,
		      "amount": Amount
		    },
		    {
		      "item": Item1
		    },
		    {
		      "item": Item2
		    }
		  ],
		  "heatRequirement": "heated",
		  "processingTime": 300,
		  "results": [
		    {
		      "item": Output
		    }
		  ]
		})
	}

    event.remove({output: 'clanginghowl:blaze_fuel'})
	bulk_fermenting(
		"malum:blazing_quartz",
		"minecraft:blaze_powder",
		"supplementaries:lumisene", 100,
		"clanginghowl:blaze_fuel"
	)

})