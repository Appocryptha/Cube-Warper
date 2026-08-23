// CobbleGen 5.4.8 - dimension-specific cobblestone generators

const $CobbleGen = Java.loadClass(
    'io.github.null2264.cobblegen.CobbleGen'
)

const $CobbleGenerator = Java.loadClass(
    'io.github.null2264.cobblegen.data.generator.CobbleGenerator'
)

const $ResultList = Java.loadClass(
    'io.github.null2264.cobblegen.data.config.ResultList'
)

const $WeightedBlock = Java.loadClass(
    'io.github.null2264.cobblegen.data.config.WeightedBlock'
)

const $Fluids = Java.loadClass(
    'net.minecraft.world.level.material.Fluids'
)


// Create one CobbleGen generator that only works in the specified dimension.
function dimensionCobbleGenerator(dimension, output) {

    let result = $ResultList.of(
        new $WeightedBlock.Builder()
            .setId(output)
            .setWeight(100.0)
            .build()
    )

    return new JavaAdapter(
        $CobbleGenerator,
        {
            check: function(level, pos, state, fromTop) {

                // Only allow this generator in our chosen dimension.
                return level.dimension().location().toString() === dimension
            }
        },

        // Result list
        result,

        // Neighbouring fluid required by CobbleGenerator.
        $Fluids.LAVA,

        // Silent
        false
    )
}


// Register after CobbleGen has loaded its own generators.
ServerEvents.loaded(event => {

    let generators = $CobbleGen.FLUID_INTERACTION.getLocalGenerators()
    let waterGenerators = generators.get($Fluids.WATER)

    if (waterGenerators == null) {
        console.log('[KubeJS CobbleGen] Could not find CobbleGen water generators!')
        return
    }

    waterGenerators.add(
        0,
        dimensionCobbleGenerator(
            'hexahedron:magma_plateau',
            'tconstruct:seared_cobble'
        )
    )

    waterGenerators.add(
        0,
        dimensionCobbleGenerator(
            'hexahedron:brimstone_veil',
            'biomesoplenty:brimstone'
        )
    )

    waterGenerators.add(
        0,
        dimensionCobbleGenerator(
            'hexahedron:lavender_fields',
            'minecraft:end_stone'
        )
    )

    console.log('[KubeJS CobbleGen] Dimension-specific generators registered!')
})