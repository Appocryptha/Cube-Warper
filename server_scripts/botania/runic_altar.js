ServerEvents.recipes(event => {

	let basic_runes = (rune, petal1, petal2, mana) => {

		event.remove({output: rune})

		event.recipes.botania.runic_altar(
		{
			item:rune,
			count:4
		},
			[
				petal1, 
				petal2
			],
			mana
		)
	}

	basic_runes("botania:rune_water",
		"botania:blue_petal",
		"botania:cyan_petal",
		20000
	)

	basic_runes("botania:rune_earth",
		"botania:green_petal",
		"botania:lime_petal",
		20000
	)

	basic_runes("botania:rune_fire",
		"botania:red_petal",
		"botania:orange_petal",
		20000
	)

	basic_runes("botania:rune_air",
		"botania:white_petal",
		"botania:light_blue_petal",
		20000
	)

	basic_runes("botania:rune_mana",
		"botania:purple_petal",
		"botania:magenta_petal",
		20000
	)

})