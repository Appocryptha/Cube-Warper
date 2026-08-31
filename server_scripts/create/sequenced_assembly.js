ServerEvents.recipes(event => {
	
	//event.remove({id: 'immersiveengineering:crafting/heavy_engineering'})
	//event.recipes.createSequencedAssembly([
	//	'immersiveengineering:heavy_engineering'
	//],  'kubejs:heavy_engineering_empty', [
	//	event.recipes.createDeploying('kubejs:light_engineering_empty', ['kubejs:light_engineering_empty', 'kubejs:soul_fuse']),
	//	event.recipes.createDeploying('kubejs:light_engineering_empty', ['kubejs:light_engineering_empty', 'immersiveengineering:component_electronic']),
	//	event.recipes.createDeploying('kubejs:light_engineering_empty', ['kubejs:light_engineering_empty', 'create:electron_tube']),
	//]).transitionalItem('kubejs:heavy_engineering_empty').loops(1)



	event.recipes.createSequencedAssembly([
		'kubejs:circuitboard'
	],  'kubejs:circuitboard_empty', [
		event.recipes.createFilling(  	'kubejs:circuitboard_empty', ['kubejs:circuitboard_empty', Fluid.of('mekanism:sulfuric_acid', 100)]),
		event.recipes.createDeploying(	'kubejs:circuitboard_empty', ['kubejs:circuitboard_empty', 'immersiveengineering:component_electronic']),
		event.recipes.createDeploying(	'kubejs:circuitboard_empty', ['kubejs:circuitboard_empty', 'immersiveengineering:component_electronic_adv']),
	]).transitionalItem('kubejs:circuitboard_empty').loops(1)


	event.recipes.createSequencedAssembly([
		'kubejs:modular_reactor_empty'
	],  'mekanism:steel_casing', [
		event.recipes.createDeploying(	'mekanism:steel_casing', ['mekanism:steel_casing', 'minecraft:netherite_ingot']),
		event.recipes.createDeploying(	'mekanism:steel_casing', ['mekanism:steel_casing', 'alexscaves:polymer_plate']),
		event.recipes.createDeploying(	'mekanism:steel_casing', ['mekanism:steel_casing', 'alexscaves:fissile_core']),
	]).transitionalItem('mekanism:steel_casing').loops(20)

})