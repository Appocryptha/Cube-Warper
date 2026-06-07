ServerEvents.recipes(event => {

	let press = (die, input, output) => {
        event.recipes.thermal.press(output, [
            input, 
            die
        ])
    }

        let universal_press = (material, input) => {
            let output_wire = `immersiveengineering:wire_${material}`
            if (Item.exists(output_wire)) {
                press(  'immersiveengineering:mold_wire',          
                         input,                  
                        `2x immersiveengineering:wire_${material}`
                )
            }

            let output_plate = `thermal:${material}_plate`
            if (Item.exists(output_plate)) {
                press(  'immersiveengineering:mold_plate',          
                         input,                  
                        `thermal:${material}_plate`
                )
            }

            let output_rod = `immersiveengineering:${material}_rod`
            if (Item.exists(output_rod)) {
                press(  'immersiveengineering:mold_rod',          
                         input,                  
                        `4x immersiveengineering:${material}_rod`
                )
            }

            let output_stick = `immersiveengineering:${material}_rod`
            if (Item.exists(output_stick)) {
                press(  'immersiveengineering:mold_rod',          
                         input,                  
                        `4x immersiveengineering:stick_${material}`
                )
            }

            let output_gear = `thermal:${material}_gear`
            if (Item.exists(output_gear)) {
                press(  'immersiveengineering:mold_gear',          
                         input,                  
                        `thermal:${material}_gear`
                )
            }
        }

    Ingredient.of('#forge:ingots').itemIds.forEach(id => {
        let material = id.split(':')[1].replace('ingot_', '').replace('_ingot','')
        universal_press(material, id)
    })

})