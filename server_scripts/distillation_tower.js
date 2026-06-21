ServerEvents.recipes(event => {


	event.custom({
		"type": "immersivepetroleum:distillation",
		"byproducts": [
		  {
		    "chance": "0.07",
		    "item": "immersivepetroleum:bitumen"
		  }
		],
		"energy": 1024,
		"input": {
		  "amount": 60,
		  "tag": "forge:crude_oil"
		},
		"results": [
		  {
		    "amount": 15,
		    "fluid": "immersivepetroleum:petroleum_gas"
		  },
		  {
		    "amount": 20,
		    "fluid": "immersivepetroleum:kerosene"
		  },
		  {
		    "amount": 30,
		    "fluid": "immersivepetroleum:diesel"
		  }
		],
		"time": 1
	})


})