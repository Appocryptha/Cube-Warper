ServerEvents.recipes(event => {

    let spirit_infusion = (output, count, input, extra_items, spirits) => {

        extra_items = extra_items || []
        spirits = spirits || []

        event.remove({output: output})
        event.remove({
            id: `malum:spirit_infusion/${output.split(":")[1]}`
        })

        event.custom({
            type: "malum:spirit_infusion",

            extra_items: extra_items,

            input: {
                count: 1,
                item: input
            },

            output: {
                count: count,
                item: output
            },

            spirits: spirits
        })
    }

    spirit_infusion(
        "malum:spirit_crucible", 1,
        "minecraft:furnace",
        [
            {
                count: 8,
                item: "botania:livingrock"
            },
            {
                count: 32,
                item: "thermal:silver_ingot"
            },
            {
                count: 1,
                item: "alexscaves:fissile_core"
            }
        ],
        [
            {
                type: "arcane",
                count: 8
            },
            {
                type: "infernal",
                count: 16
            },
            {
                type: "earthen",
                count: 4
            }
        ]
    )

    spirit_infusion(
        "caverns_and_chasms:large_arrow", 4,
        "immersiveposts:stick_silver",
        [
            {
                count: 16,
                item: "thermal:silver_ingot"
            }
        ],
        [
            {
                type: "aerial",
                count: 8
            }
        ]
    )
})