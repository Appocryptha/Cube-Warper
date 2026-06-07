ServerEvents.recipes(event => {

	event.remove({id: 'malum:spirit_crucible/glowstone_dust'})
	event.remove({id: 'malum:spirit_crucible/gunpoweder'})
	event.remove({id: 'malum:spirit_crucible/redstone'})

	let spirit_crucible = (Catalyst, Output, Spirits) => {
		event.custom({
		  	"type": "malum:spirit_focusing",
		  	"durabilityCost": 50,
		  	"input": {
		  	  "item": "malum:alchemical_impetus"
		  	},
		  	"output": {
		  	  "count": 2,
		  	  "item": Output
		  	},
		  	"spirits": [
		  	  {
		  	    "type": Spirits
		  	  }
		  	],
		  	"time": 10
		})

		event.recipes.farmersdelight.cutting(
    	    Catalyst,
    	    '#forge:tools/pickaxes',
    	    [
				Output
    	    ],
    	    'malum:cthonic_gold_break'
		)
	}

	spirit_crucible(
		'botania:rune_water', 
		'malum:aqueous_spirit', 
		'aqueous'
	)

	spirit_crucible(
		'botania:rune_earth', 
		'malum:earthen_spirit', 
		'earthen'
	)

	spirit_crucible(
		'botania:rune_fire', 
		'malum:infernal_spirit', 
		'infernal'
	)

	spirit_crucible(
		'botania:rune_air', 
		'malum:aerial_spirit', 
		'aerial'
	)

})