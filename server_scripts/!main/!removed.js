ServerEvents.recipes(event => {

    //Removed
        event.remove({id: 'create_alexcaves_compat:splashing/guano_block'})
        event.remove({id: 'create_alexcaves_compat:sequenced_assembly/occult_gem'})
        event.remove({id: 'botania:petal_apothecary/jaded_amaranthus'})
        event.remove({output: 'tconstruct:seared_melter'})
        event.remove({input: 'immersiveengineering:wirecutter'})
        event.remove({input: 'immersiveengineering:hammer'})
        event.remove({id: 'mechanism:sawing/torch'})

    //Removed and unlisted items
        event.remove({output: 'malum:crude_scythe'})
        event.remove({output: 'malum:soul_stained_steel_scythe'})
        event.remove({output: 'botania:endoflame'})
        event.remove({output: 'botania:floating_endoflame'})
        event.remove({input: '#forestry:bees'})
        event.remove({output: '#forestry:bees'})
        event.remove({input: '#forestry:combs'})
        event.remove({output: '#forestry:combs'})
        event.remove({output: '#forestry:combs'})
        event.remove({output: 'untagged_mobs:television'})


})