ServerEvents.recipes(event => {

    event.remove({output: 'alexscaves:polymer_plate'})
	event.recipes.thermal.smelter('alexscaves:polymer_plate', ['create:iron_sheet', 'alexscaves:radon_bottle', 'alexscaves:sulfur_dust'])

    event.remove({output: 'alexscaves:uranium_rod'})
	event.recipes.thermal.smelter('alexscaves:uranium_rod', ['minecraft:glass', 'alexscaves:uranium', 'mekanism:yellow_cake_uranium'])

    event.remove({output: 'enderio:pulsating_alloy_ingot'})
	event.recipes.thermal.smelter('enderio:pulsating_alloy_ingot', ['mekanism:ingot_osmium', 'malum:cluster_of_brilliance'])

	event.recipes.thermal.smelter('immersiveengineering:insulating_glass', ['thermal:iron_dust', '2x minecraft:glass'])
	
})