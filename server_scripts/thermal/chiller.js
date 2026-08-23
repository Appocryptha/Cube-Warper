ServerEvents.recipes(event => {

	let chiller = (Input1, Cast, Output) => {
		event.custom({
	  		"type": "thermal:chiller",
	  		"ingredients": [
	  		  {
	  		    "fluid": Input1,
	  		    "amount": 250
	  		  },
	  		  {
	  		    "item": Cast
	  		  }
	  		],
	  		"result": [
	  		  {
	  		    "item": Output,
	  		    "count": 1
	  		  }
	  		],
	  		"energy": 5000
		})
	}
	
	chiller(
		"create:chocolate",
		"ae2:engineering_processor_press",
		"kubejs:chocolate_chip",
	)

	event.remove({output: 'clanginghowl:cryogenic_fuel'})
	chiller(
		"minecraft:water",
		"alexscaves:peppermint_powder",
		"clanginghowl:cryogenic_fuel",
	)

})