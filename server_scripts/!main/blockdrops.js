LootJS.modifiers((event) => {

    event.addBlockLootModifier("minecraft:grass")
        .removeLoot(Ingredient.all)
    event.addBlockLootModifier("minecraft:tall_grass")
        .removeLoot(Ingredient.all)

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

    event.addBlockLootModifier("untagged_mobs:missing_block")
        .removeLoot(Ingredient.all)
		.addLoot("untagged_mobs:item_missing");

    event.addBlockLootModifier("tconstruct:seared_stone")
        .removeLoot(Ingredient.all)
		.addLoot("tconstruct:seared_cobble");

    event.addBlockLootModifier("incision:carrion_eye")
        .removeLoot(Ingredient.all)
		.addLoot("incision:congealed_acid");

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
