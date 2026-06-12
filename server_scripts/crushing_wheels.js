ServerEvents.recipes(event => {

    event.remove({output: 'minecraft:blaze_powder'})
    event.recipes.createCrushing(['create:empty_blaze_burner', Item.of('minecraft:blaze_powder').withChance(0.5)], ['create:blaze_burner'])
	
})