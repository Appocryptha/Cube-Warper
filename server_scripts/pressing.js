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

})