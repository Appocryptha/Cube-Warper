ServerEvents.recipes(event => {

	event.recipes.mekanism.combining('kubejs:vector_operator_blaze', 
		'clanginghowl:blaze_fuel', 
		'kubejs:vector_operator_empty'
	)

	event.recipes.mekanism.combining('kubejs:alpha_particles', 
		'regions_unexplored:alpha_rose', 
		'regions_unexplored:alpha_dandelion'
	)

	event.remove({output: 'clanginghowl:energy_fiber'})
	event.recipes.mekanism.combining('clanginghowl:energy_fiber', 
		'kubejs:bottled_lightning',
		'16x clanginghowl:extraterrestrial_energy_crystal'
	)

})