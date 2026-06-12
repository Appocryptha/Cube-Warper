StartupEvents.registry('block', event => {

let rotatable = (id, name, configure) => {
    let block = event.create(id)
        .displayName(name)
        .property(BlockProperties.FACING)
        .placementState(c => {
            c.set(BlockProperties.FACING, c.nearestLookingDirection.opposite)
        })

    configure(block)

    block.blockstateJson = {
        variants: {
            "facing=up":    { model: `kubejs:block/${id}`, y: 0 },
            "facing=down":  { model: `kubejs:block/${id}`, y: 0 },
            "facing=north": { model: `kubejs:block/${id}`, y: 0 },
            "facing=east":  { model: `kubejs:block/${id}`, y: 90 },
            "facing=south": { model: `kubejs:block/${id}`, y: 180 },
            "facing=west":  { model: `kubejs:block/${id}`, y: 270 }
        }
    }
}

	rotatable("warping_interface", "Warping Interface", block => {block
	    .fullBlock(true)
	    .material("netherite_block")
	    .soundType("netherite_block")
	    .unbreakable()
	})

	rotatable("warping_interface_running", "Warping Interface", block => {block
		.fullBlock(true)
		.material("netherite_block")
		.soundType("netherite_block")
		.unbreakable()
	})

	rotatable("warping_interface_cracked", "Broken Warping Interface", block => {block
		.fullBlock(true)
		.material("netherite_block")
		.soundType("netherite_block")
		.unbreakable()
	})

	rotatable("warping_disc_drive", "Warping Disc Drive", block => {block
		.fullBlock(true)
		.material("netherite_block")
		.soundType("netherite_block")
		.unbreakable()
	})

	rotatable("warping_controls", "Warping Controls", block => {block
		.fullBlock(true)
		.material("netherite_block")
		.soundType("netherite_block")
		.unbreakable()
	})

	rotatable("launch_button", "Launch Button", block => {block
		.fullBlock(false)
		.material("shroomlight")
		.soundType("shroomlight")
		.unbreakable()
		.box(5, 5, 14, 11, 11, 16 )
		.renderType('translucent')
		.waterlogged()
	})

	rotatable("launch_button_pressed", "Launch Button", block => {block
		.fullBlock(false)
		.material("shroomlight")
		.soundType("shroomlight")
		.unbreakable()
		.box(5, 5, 15, 11, 11, 16 )
		.renderType('translucent')
		.waterlogged()
	})

	rotatable("warping_controls_pressed", "Warping Controls", block => {block
		.fullBlock(true)
		.material("netherite_block")
		.soundType("netherite_block")
		.unbreakable()
	})

	rotatable("time_warper", "Time Warper", block => {block
		.fullBlock(true)
		.material("netherite_block")
		.soundType("netherite_block")
		.unbreakable()
	})


let operator = (id, name, color) => {
	event.create(`vector_operator_${id}`)
		.displayName(`${color}${name} Vector Operator`)
		.fullBlock(false)
		.material("lantern")
		.soundType("lantern")
		.lightLevel(1.0)
		.box(4, 0, 4, 12, 10, 12)
		.renderType('translucent')
		.waterlogged()
		.hardness(0.0)
	}

	operator("empty", 		"Empty", 		'§f')
	operator("basic", 		"Old", 			'§f§l')
	operator("charged", 	"Charged", 		'§e§l')
	operator("fluix", 		"Fluix", 		'§5§l')
	operator("nuclear", 	"Nuclear", 		'§a§l')
	operator("crimson", 	"Crimson", 		'§4§l')
	operator("blaze", 		"Blazing", 		'§6§l')
	operator("lightning",	"Lightning",	'§b§l')

	//§0 black
	//§1 dark blue
	//§2 dark green
	//§3 dark aqua
	//§4 dark red
	//§5 dark purple
	//§6 gold
	//§7 gray
	//§8 dark gray
	//§9 blue
	//§a green
	//§b aqua
	//§c red
	//§d light purple
	//§e yellow
	//§f white

	//§l = bold
	//§o = italic
	//§n = underline
	//§m = strikethrough
	//§k = obfuscated/magic text
	//§r = reset

	event.create('vector_operator_eye')
		.displayName('§c§l§kObserving§r§c§l Vector Operator')
		.fullBlock(false)
		.material("lantern")
		.soundType("lantern")
		.box(4, 0, 4, 12, 10, 12)
		.renderType('translucent')
		.waterlogged()
		.hardness(0.0)


let eye = (id) => {
	event.create(id).displayName("Crimson Eye")
	
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
		.unbreakable()
		.property(BlockProperties.FACING)
		.placementState(c =>{
			  c.set(BlockProperties.FACING, c.nearestLookingDirection.opposite)}
		)
    	.blockstateJson = {
    	    variants: {
    	        "facing=up":    { model: `kubejs:block/${id}`, y: 0 },
    	        "facing=down":  { model: `kubejs:block/${id}`, y: 0 },
    	        "facing=north": { model: `kubejs:block/${id}`, y: 0 },
    	        "facing=east":  { model: `kubejs:block/${id}`, y: 90 },
    	        "facing=south": { model: `kubejs:block/${id}`, y: 180 },
    	        "facing=west":  { model: `kubejs:block/${id}`, y: 270 }
    	    }
		}
	}

	eye("eye_closed")
	eye("eye_open")
	eye("eye_stage_1")
	eye("eye_stage_2")
	eye("eye_stage_3")
	eye("eye_stage_4")

	event.create('crimson_eye').displayName("§cCrimson Eye")
		.fullBlock(true)
		.material("netherite_block")
		.soundType("netherite_block")
		.unbreakable()
		.box (4, 0, 4, 12, 8, 12)

	event.create('hexahedron_filling').displayName("Hexahedron")
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
		.unbreakable()
		.transparent(true)
		.defaultCutout()
		.noCollision()

	event.create('warping_frame').displayName("Warping Frame")
		.fullBlock(true)
		.material("netherite_block")
		.soundType("netherite_block")
		.unbreakable()

	event.create('stacked_warping_frame').displayName("Warping Frame Slab")
		.fullBlock(true)
		.material("netherite_block")
		.soundType("netherite_block")
		.unbreakable()

	event.create('warping_frame_platform').displayName("Warping Frame Platform")
		.fullBlock(true)
		.material("netherite_block")
		.soundType("netherite_block")
		.unbreakable()
		.box(0, 8, 0, 16, 16, 16)

	event.create('warping_frame_rusted_half').displayName("Rusted Warping Frame")
		.fullBlock(true)
		.material("netherite_block")
		.soundType("netherite_block")
		.unbreakable()

	event.create('warping_frame_rusted').displayName("Rusted Warping Frame")
		.fullBlock(true)
		.material("netherite_block")
		.soundType("netherite_block")
		.unbreakable()

	event.create('warping_frame_rusted_end').displayName("Rusted Warping Frame")
		.fullBlock(true)
		.material("netherite_block")
		.soundType("netherite_block")
		.unbreakable()

	event.create('warping_frame_rusted_half_end').displayName("Rusted Warping Frame")
		.fullBlock(true)
		.material("netherite_block")
		.soundType("netherite_block")
		.unbreakable()

	event.create('warping_vent').displayName("Warping Vent")
		.fullBlock(true)
		.material("netherite_block")
		.soundType("netherite_block")
		.unbreakable()

	event.create('warping_vent_rusted_half').displayName("Rusted Warping Vent")
		.fullBlock(true)
		.material("netherite_block")
		.soundType("netherite_block")
		.unbreakable()

	event.create('warping_vent_rusted').displayName("Rusted Warping Vent")
		.fullBlock(true)
		.material("netherite_block")
		.soundType("netherite_block")
		.unbreakable()

	event.create('crimson_statue').displayName("Crimson Statue")
		.fullBlock(true)
		.material("calcite")
		.soundType("calcite")

	event.create('eye_pillar').displayName("Eye Pillar")
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
		.unbreakable()

	event.create('ancient_bricks').displayName("Ancient Bricks")
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
		.unbreakable()

	event.create('ancient_bricks_stairs', 'stairs').displayName("Ancient Brick Stairs")
	    .textureAll('kubejs:block/ancient_bricks/ancient_bricks1')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
		.unbreakable()

	event.create('ancient_bricks_slab', 'slab').displayName("Ancient Brick Slab")
	    .textureAll('kubejs:block/ancient_bricks/ancient_bricks1')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
		.unbreakable()

	event.create('ancient_bricks_wall', 'wall').displayName("Ancient Brick Wall")
	    .textureAll('kubejs:block/ancient_bricks/ancient_bricks1')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
		.unbreakable()

	event.create('ancient_runes').displayName("Ancient Runes")
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
		.unbreakable()

	event.create('half_frame_bottom').displayName('Bottom of a Machine Frame')
		.material('lantern').hardness(1.5)
		.tagBlock('minecraft:mineable/pickaxe')
		.soundType("lantern")
		.box(11, 5, 11, 16, 8, 16, true)
		.box(0, 5, 11, 5, 8, 16, true)
		.box(11, 5, 0, 16, 8, 5, true)
		.box(0, 5, 0, 5, 8, 5, true)
		.box(5, 0, 11, 11, 5, 16, true)
		.box(5, 0, 0, 11, 5, 5, true)
		.box(11, 0, 0, 16, 5, 16, true)
		.box(0, 0, 0, 5, 5, 16, true)

	event.create('half_frame_top').displayName('Top of a Machine Frame')
		.material('lantern').hardness(1.5)
		.tagBlock('minecraft:mineable/pickaxe')
		.soundType("lantern")
		.box(11, 0, 0, 16, 5, 5, true)
		.box(0, 0, 0, 5, 5, 5, true)
		.box(11, 0, 11, 16, 5, 16, true)
		.box(0, 0, 11, 5, 5, 16, true)
		.box(5, 5, 0, 11, 10, 5, true)
		.box(5, 5, 11, 11, 10, 16, true)
		.box(11, 5, 0, 16, 10, 16, true)
		.box(0, 5, 0, 5, 10, 16, true)

	event.create('emergency_fuses').displayName("Emergency Fuses")
		.fullBlock(true)
		.material("wood")
		.soundType("cherry_wood")
		.hardness(0.5)

	event.create('coin_pile_gold').displayName("Gold Coins")
		.fullBlock(true)
		.material("stone")
		.soundType("chain")
		.hardness(0.2)
		.tagBlock("mineable/shovel") 

	event.create('coin_bag_gold').displayName("Bag of Gold Coins")
		.fullBlock(true)
		.material("stone")
		.soundType("chain")
		.hardness(0.2)
		.tagBlock("mineable/shovel") 

	event.create('nuke_open').displayName("Opened Nuclear Bomb")
		.fullBlock(true)
		.material("netherite_block")
		.soundType("netherite_block")
		.unbreakable()

})

StartupEvents.registry('item', event => {

	event.create('error_cube').displayName('Error Cube')
	event.create('bottled_lightning').displayName('Lightning in a Bottle')
	event.create('crowbar').displayName('Crowbar')
	event.create('unbaked_guano_blast_brick').displayName('Unbaked Guano Blast Brick')
	event.create('guano_blast_brick').displayName('Guano Blast Brick')
	event.create('extreme_temperature_regulator').displayName('Extreme Temperature Regulator')
	event.create('chocolate_chip').displayName('Chocolate Chip')
	event.create('cooling_unit').displayName('Cooling Unit')
	event.create('alpha_particles').displayName('Alpha Particles')

})