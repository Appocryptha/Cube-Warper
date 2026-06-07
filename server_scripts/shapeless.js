ServerEvents.recipes(event => {

	event.shapeless('4x kubejs:vector_operator_basic', ['kubejs:emergency_fuses'])
	event.shapeless('4x tconstruct:seared_brick', ['tconstruct:seared_bricks'])
	event.shapeless('9x thermal:gold_coin', ['kubejs:coin_bag_gold'])
	event.shapeless('kubejs:coin_bag_gold', ['9x thermal:gold_coin'])

	event.remove({input: 'windswept:snowdrop'})
	event.shapeless('2x botania:white_petal', ['windswept:snowdrop'])

	event.shapeless('kubejs:crowbar', ['immersiveengineering:stick_iron'])

	event.remove({output: 'immersiveengineering:blastbrick'})
	event.shapeless('immersiveengineering:blastbrick', ['4x kubejs:guano_blast_brick'])


})