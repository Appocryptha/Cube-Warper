BlockEvents.rightClicked('alexscaves:nuclear_bomb', event => {
	if (event.item.id == 'kubejs:crowbar') {
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run setblock ~ ~ ~ kubejs:nuke_open`)
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:entity.zombie.attack_iron_door master @a ~ ~ ~ 0.2 0`)
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run title @a[distance=..10] actionbar ["",{"translate":"message.hexahedron.nuclear_bomb.1","color":"white"},{"text":"translate":"message.hexahedron.nuclear_bomb.2","bold":true,"color":"red"},{"translate":"message.hexahedron.nuclear_bomb.3"},{"text":"translate":"message.hexahedron.nuclear_bomb.4","bold":true,"color":"green"},{"translate":"message.hexahedron.nuclear_bomb.5","color":"white"}]`)}
})

BlockEvents.rightClicked('kubejs:nuke_open', event => {
	if (event.item.id == 'immersiveengineering:wirecutter') {
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run function hexahedron:rng/nuclear_defusal`)
	}
})

BlockEvents.leftClicked('kubejs:nuke_open', event => {
	if (event.item.id == 'immersiveengineering:wirecutter') {
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run function hexahedron:rng/nuclear_defusal`)
	}
})

ItemEvents.entityInteracted('item.entity_interact', event => {
  	if (event.target.type != "alexscaves:nuclear_bomb" || event.item.id != "minecraft:shears") return
		event.cancel()
})