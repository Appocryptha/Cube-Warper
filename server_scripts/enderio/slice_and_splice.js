ServerEvents.recipes(event => {

    event.custom({
		"type": "enderio:slicing",
		"energy": 20000,
		"inputs": [
		  {
		    "item": "kubejs:peeking_circuit"
		  },
		  {
		    "item": "kubejs:crimson_eye"
		  },
		  {
		    "item": "kubejs:peeking_circuit"
		  },
		  {
		    "item": "kubejs:plastic"
		  },
		  {
		    "item": "enderio:basic_capacitor"
		  },
		  {
		    "item": "kubejs:plastic"
		  }
		],
		"output": {
		  "item": "enderio:guardian_diode"
		}
	})

})