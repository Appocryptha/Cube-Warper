ServerEvents.recipes(event => {

    event.remove({output: 'alexscaves:polymer_plate'})
	event.recipes.thermal.smelter('alexscaves:polymer_plate', ['create:iron_sheet', 'alexscaves:radon_bottle', 'alexscaves:sulfur_dust'])

    event.remove({output: 'alexscaves:uranium_rod'})
	event.recipes.thermal.smelter('alexscaves:uranium_rod', ['minecraft:glass', 'alexscaves:uranium', 'mekanism:yellow_cake_uranium'])
	
})