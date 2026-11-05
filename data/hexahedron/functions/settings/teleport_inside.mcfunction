scoreboard objectives add hex_settings dummy
scoreboard players set warp_pull_players hex_settings 1
tellraw @a ["",{"translate":"message.hexahedron.teleport_inside.1","color":"aqua","bold":true},{"translate":"message.hexahedron.teleport_inside.2","color":"gray"},{"translate":"message.hexahedron.teleport_inside.3","color":"green","bold":true},{"translate":"message.hexahedron.teleport_inside.4","color":"gray"}]
