LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("untagged_mobs:non_player")
        .removeLoot(Ingredient.all)
        .addLoot("untagged_mobs:skybox_missing");
});


