BlockEvents.broken("kubejs:vector_operator_empty", event => {
    event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~ ~ {Motion:[0.0,0.25,-0.05],Item:{id:"kubejs:vector_operator_empty",Count:1b}}`)

})
