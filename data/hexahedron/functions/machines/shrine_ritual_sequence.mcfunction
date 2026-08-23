scoreboard players add @e[tag=active_ritual] time 1

execute as @e[tag=active_ritual] at @s run particle minecraft:crimson_spore ~ ~-3.5 ~ 10 0 10 0 100 force

execute as @e[tag=active_ritual,scores={time=2}] at @s positioned ~ ~-2 ~-15 run function hexahedron:machines/shrine_ritual_consume
execute as @e[tag=active_ritual,scores={time=3}] at @s positioned ~11 ~-2 ~-11 run function hexahedron:machines/shrine_ritual_consume
execute as @e[tag=active_ritual,scores={time=4}] at @s positioned ~15 ~-2 ~ run function hexahedron:machines/shrine_ritual_consume
execute as @e[tag=active_ritual,scores={time=5}] at @s positioned ~11 ~-2 ~11 run function hexahedron:machines/shrine_ritual_consume
execute as @e[tag=active_ritual,scores={time=6}] at @s positioned ~ ~-2 ~15 run function hexahedron:machines/shrine_ritual_consume
execute as @e[tag=active_ritual,scores={time=7}] at @s positioned ~-11 ~-2 ~11 run function hexahedron:machines/shrine_ritual_consume
execute as @e[tag=active_ritual,scores={time=8}] at @s positioned ~-15 ~-2 ~ run function hexahedron:machines/shrine_ritual_consume
execute as @e[tag=active_ritual,scores={time=9}] at @s positioned ~-11 ~-2 ~-11 run function hexahedron:machines/shrine_ritual_consume


execute as @e[tag=active_ritual,scores={time=10}] at @s run playsound malum:ritual_completed master @a ~ ~ ~ 30 0
execute as @e[tag=active_ritual,scores={time=10}] at @s run playsound untagged_mobs:misc.mutate master @a ~ ~ ~ 1 0

execute as @e[tag=active_ritual,scores={time=10}] at @s if block ~ ~ ~ kubejs:vector_operator_empty if score @s computer matches 4 if score @s forsaken_idol matches 4 run setblock ~ ~ ~ kubejs:vector_operator_eye


execute as @e[tag=active_ritual,scores={time=..10}] at @s run schedule function hexahedron:machines/shrine_ritual_sequence 1s
execute as @e[tag=active_ritual,scores={time=11..}] at @s run tag @s remove active_ritual

execute as @e[type=marker,tag=ritual_marker,scores={time=11..}] at @s run scoreboard players set @s computer 0
execute as @e[type=marker,tag=ritual_marker,scores={time=11..}] at @s run scoreboard players set @s forsaken_idol 0
execute as @e[type=marker,tag=ritual_marker,scores={time=11..}] at @s run scoreboard players set @s eye 0
execute as @e[type=marker,tag=ritual_marker,scores={time=11..}] at @s run scoreboard players set @s time 0
