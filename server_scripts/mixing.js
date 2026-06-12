ServerEvents.recipes(event => {

	event.remove({id: 'malum:spirit_infusion/alchemical_calx'})
	event.recipes.createMixing('malum:alchemical_calx', [
	  	'minecraft:clay_ball',
	  	'malum:runic_sapball',
		'thermal:silver_dust'
	])//.superheated()

	event.recipes.createMixing(Fluid.of('kubejs:rose_water', 100), [
	  	Fluid.of('minecraft:water', 100),
	  	'regions_unexplored:alpha_rose'
	])//.superheated()

	event.recipes.createMixing(['supplementaries:ash', Item.of('thermal:iron_dust').withChance(2.0)], [
		Fluid.of('biomesoplenty:blood', 1000)
	]).heated()

})