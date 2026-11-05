scoreboard objectives add hex_settings dummy
scoreboard players set warp_pull_players hex_settings 0
tellraw @a ["",{"translate":"message.hexahedron.leave_behind.1","color":"aqua","bold":true},{"translate":"message.hexahedron.leave_behind.2","color":"gray"},{"translate":"message.hexahedron.leave_behind.3","color":"gold","bold":true},{"translate":"message.hexahedron.leave_behind.4","color":"gray"}]
