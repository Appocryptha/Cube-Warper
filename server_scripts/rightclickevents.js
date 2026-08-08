BlockEvents.rightClicked('kubejs:launch_button', event => {

	event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run tag @e[tag=core] add pre_runtime`)
	event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run function hexahedron:first_init/world_start`)


})

BlockEvents.rightClicked('kubejs:ancient_core', event => {

	if (event.item.id == 'minecraft:redstone') {
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} unless score @e[distance=..2,tag=ancient_redstone,limit=1,sort=nearest] redstone_cooldown matches 1.. run function hexahedron:machines/ancient_redstone`)
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} unless score @e[distance=..2,tag=ancient_redstone,limit=1,sort=nearest] redstone_cooldown matches ..0 run execute as @e[type=marker,tag=ancient_redstone] run title @a actionbar [
  {"text":"This Ancient Redstone is recharging, wait ","bold":true,"color":"red"},
  {"score":{"name":"@s","objective":"redstone_cooldown"},"bold":true,"color":"red"},
  {"text":" more seconds...","bold":true,"color":"red"}
]`)
		event.item.count--
		event.player.giveInHand('kubejs:energized_redstone')	
	}
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

ItemEvents.rightClicked('kubejs:portal_lantern', event => {
		event.item.count--
		event.player.level.playSound(null, event.entity.x, event.entity.y, event.entity.z, "minecraft:block.glass.break", "blocks", 1, 0);
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.entity.x} ${event.entity.y} ${event.entity.z} run function hexahedron:return_portal/return_portal`)

})

ItemEvents.rightClicked('alexscaves:desolate_dagger', event => {
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.entity.x} ${event.entity.y} ${event.entity.z} run damage @a[limit=1,sort=nearest] 10 minecraft:player_attack by @a[limit=1,sort=nearest]`)
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.entity.x} ${event.entity.y} ${event.entity.z} run playsound malum:ritual_evolves master @a ~ ~ ~ 1 0`)
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.entity.x} ${event.entity.y} ${event.entity.z} run playsound minecraft:block.honey_block.place master @a ~ ~ ~ 1 0`)
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.entity.x} ${event.entity.y} ${event.entity.z} run particle untagged_mobs:blood ~ ~ ~ 0 0 0 0.2 1000`)
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.entity.x} ${event.entity.y} ${event.entity.z} run function hexahedron:machine/shrine_ritual`)

})