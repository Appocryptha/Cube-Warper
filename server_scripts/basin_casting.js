ServerEvents.recipes(event => {

	let basin_processing = (Input, Amount, Cast, Output) => {
		event.custom({
  			"type": "createdieselgenerators:casting",
  			"ingredients": [
  				{
  				  "fluid": Input,
  				  "amount": Amount
  				}
  			],
  			"mold": Cast,
  			"results": [
  				{
  				  "item": Output,
  				  "count": 1
  				}
  			]
		})
	}
	
    event.remove({output: 'immersiveengineering:ingot_steel'})
	basin_processing(
		"tconstruct:molten_steel", 90,
		"createdieselgenerators:bar",
		"immersiveengineering:ingot_steel"
	)

})