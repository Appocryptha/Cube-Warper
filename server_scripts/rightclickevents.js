BlockEvents.rightClicked('kubejs:launch_button', event => {

	event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run tag @e[tag=core] add pre_runtime`)
	event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run function hexahedron:first_init/world_start`)


})

BlockEvents.rightClicked('create:depot', event => {

	if (event.item.id == 'immersiveengineering:hammer') {
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run execute if block ~ ~ ~ create:depot{HeldItem:{Item:{id:"minecraft:copper_ingot"}}} run function hexahedron:machines/plate_hammering`)
		}
})

BlockEvents.rightClicked('kubejs:time_warper', event => {

	if (event.item.id == 'ae2:item_cell_housing') {
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run function hexahedron:machines/time_warper`)
		event.item.count--
		}
})

ItemEvents.rightClicked('minecraft:glass_bottle', event => {
    if (event.level.dimension != "hexahedron:toxic_caves") return
		event.item.count--
		event.player.giveInHand('alexscaves:radon_bottle')
		event.player.level.playSound(null, event.entity.x, event.entity.y, event.entity.z, "minecraft:item.bottle.fill_dragonbreath", "blocks", 1, 1);
})