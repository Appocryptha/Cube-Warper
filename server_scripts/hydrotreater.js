ServerEvents.recipes(event => {

	event.remove({id: 'immersivepetroleum:hydrotreater/naphtha_cracking'})
	event.custom({
		"type": "immersivepetroleum:hydrotreater",
		"energy": 8000,
		"input": {
		  "amount": 1000,
		  "tag": "immersivepetroleum:petroleum_gas"
		},
		"result": {
		  "amount": 1000,
		  "fluid": "minecraft:water"
		},
		"secondary_input": {
		  "amount": 500,
		  "fluid": "minecraft:water"
		},
		"secondary_result": {
		  "chance": "1.0",
		  "count": 1,
		  "item": "immersiveengineering:dust_sulfur"
		},
		"time": 100
	})

})