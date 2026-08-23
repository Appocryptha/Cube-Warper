ServerEvents.recipes(event => {

    event.remove({output: 'minecraft:blaze_powder'})
    event.recipes.createCrushing(['create:empty_blaze_burner', Item.of('minecraft:blaze_powder').withChance(0.5)], ['create:blaze_burner'])
    event.recipes.createCrushing(['minecraft:netherrack', Item.of('thermal:sulfur_dust').withChance(0.1)], ['biomesoplenty:brimstone'])

	
})