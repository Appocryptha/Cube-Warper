ServerEvents.recipes(event => {


	let press = (die, input, output) => {
        event.recipes.thermal.press(output, [
            input, 
            die
        ])
    }

    event.recipes.thermal.press(Item.of('malum:alchemical_impetus', '{Damage:400}'), [
        'malum:block_of_alchemical_calx'
    ])

	event.remove({output: 'enderio:infinity_rod'})
    event.recipes.thermal.press('enderio:infinity_rod', [
        '8x enderio:grains_of_infinity',
        'immersiveengineering:mold_rod'
    ])

	event.remove({output: 'untagged_mobs:bugging_stick'})
    event.recipes.thermal.press('untagged_mobs:bugging_stick', [
        '8x untagged_mobs:executable_redactor',
        'immersiveengineering:mold_rod'
    ])

})