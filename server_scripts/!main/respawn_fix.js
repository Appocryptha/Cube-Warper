PlayerEvents.respawned(event => {
  event.player.runCommandSilent('execute in minecraft:overworld run tp @s 0.5 98 6.5')
})