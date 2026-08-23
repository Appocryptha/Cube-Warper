ServerEvents.recipes(event => {

	event.remove({output: 'create:andesite_alloy'})
	event.remove({id: 'create:mixing/andesite_alloy'})
	event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})
	event.recipes.createMixing('8x create:andesite_alloy', [
	  	'2x tconstruct:seared_cobble',
	  	'2x minecraft:iron_nugget'
	])//.superheated()

	event.remove({id: 'malum:spirit_infusion/alchemical_calx'})
	event.recipes.createMixing('malum:alchemical_calx', [
	  	'malum:runic_sapball',
		'thermal:silver_dust'
	])//.superheated()

	event.recipes.createMixing(['supplementaries:ash', Item.of('thermal:iron_dust').withChance(0.5)], [
		Fluid.of('untagged_mobs:fluid_blood', 1000)
	]).heated()

	event.recipes.createMixing([Fluid.of('kubejs:solder_fluid', 270)], [
		Fluid.of('tconstruct:molten_tin', 180),
		Fluid.of('tconstruct:molten_lead', 90)
	]).heated()

})