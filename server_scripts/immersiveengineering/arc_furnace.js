ServerEvents.recipes(event => {

	let arc_furnace = (output, input, additives, slag, time, power) => {

        additives = additives || []

		event.custom({"type":"immersiveengineering:arc_furnace",
			"additives":[
				additives
			],
			"energy":power,
			"input":{"item":input},
			"results":[{"item":output}],
			"slag":{"item":slag},
			"time":time
		})
	}



	event.remove({output: 'clanginghowl:fireproof_steel_coating'})
	arc_furnace("clanginghowl:fireproof_steel_coating",
		"immersiveengineering:plate_steel",
		[
			{"item":"clanginghowl:netherrack_shavings"}
		],
		"thermal:slag",
		400,
		300000
	)

	event.remove({output: 'enderio:end_steel_ingot'})
	arc_furnace("enderio:end_steel_ingot",
		"minecraft:end_stone",
		[
			{"item":"mekanism:dust_refined_obsidian"},
			{"item":"ae2:ender_dust"}
		],
		"create:powdered_obsidian",
		400,
		300000
	)
})