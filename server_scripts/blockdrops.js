LootJS.modifiers((event) => {

    event.addBlockLootModifier("minecraft:coal_ore")
        .removeLoot(Ingredient.all)
		.addLoot("minecraft:gravel");

    event.addBlockLootModifier("regions_unexplored:peat_grass_block")
        .removeLoot(Ingredient.all)
		.addLoot("forestry:peat");

    event.addBlockLootModifier("regions_unexplored:peat_dirt")
        .removeLoot(Ingredient.all)
		.addLoot("forestry:peat");

    event.addBlockLootModifier("regions_unexplored:peat_mud")
        .removeLoot(Ingredient.all)
		.addLoot("forestry:peat");

    event.addBlockLootModifier("regions_unexplored:peat_dirt_path")
        .removeLoot(Ingredient.all)
		.addLoot("forestry:peat");

    event.addBlockLootModifier("undergarden:shiverstone_froststeel_ore")
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [3, 10],
            ["mekanism:nugget_osmium"]
        )
        .dropExperience(3);

    event.addBlockLootModifier("kubejs:coin_pile_gold")
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [3, 10],
            ["thermal:gold_coin"]
        )

});
