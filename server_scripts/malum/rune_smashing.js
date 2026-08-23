ServerEvents.recipes(event => {

	event.remove({id: 'malum:spirit_crucible/glowstone_dust'})
	event.remove({id: 'malum:spirit_crucible/gunpoweder'})
	event.remove({id: 'malum:spirit_crucible/redstone'})

	let spirit_crucible = (Catalyst, Output, Spirits) => {
		//event.custom({
		//  	"type": "malum:spirit_focusing",
		//  	"durabilityCost": 50,
		//  	"input": {
		//  	  "item": "malum:alchemical_impetus"
		//  	},
		//  	"output": {
		//  	  "count": 2,
		//  	  "item": Output
		//  	},
		//  	"spirits": [
		//  	  {
		//  	    "type": Spirits
		//  	  }
		//  	],
		//  	"time": 10
		//})

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
		'8x malum:aqueous_spirit', 
		'aqueous'
	)

	spirit_crucible(
		'botania:rune_earth', 
		'8x malum:earthen_spirit', 
		'earthen'
	)

	spirit_crucible(
		'botania:rune_fire', 
		'8x malum:infernal_spirit', 
		'infernal'
	)

	spirit_crucible(
		'botania:rune_air', 
		'8x malum:aerial_spirit', 
		'aerial'
	)

	spirit_crucible(
		'botania:rune_mana', 
		'8x malum:arcane_spirit', 
		'arcane'
	)

})