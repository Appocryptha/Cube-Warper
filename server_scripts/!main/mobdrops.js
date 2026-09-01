LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("untagged_mobs:non_player")
        .removeLoot(Ingredient.all)
        .addLoot("untagged_mobs:skybox_missing");

    event
        .addLootTypeModifier(LootType.ENTITY)
        .removeLoot([
            'actuallyadditions:solidified_experience',
            'untagged_mobs:energy',
            'untagged_mobs:compact_disc_hostile'
        ])

});


