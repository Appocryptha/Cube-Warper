### CORE
execute as @e[tag=outer_core] at @s run spreadplayers ~ ~ 100 100 under 51 false @e[tag=outer_core]
execute as @e[tag=outer_core] at @s run tp @s ~ ~8.5 ~

### SUCCESS CHECK
execute as @e[tag=outer_core,limit=1] at @s unless block ~ ~-9 ~ air run scoreboard players set @s unfold 1

### UNFOLD
execute if score @e[tag=outer_core,limit=1] unfold matches 1 run function hexahedron:repositioning/unfold
execute if score @e[tag=outer_core,limit=1] unfold matches 1 run say success

### LOOP
execute if score @e[tag=outer_core,limit=1] unfold matches 0 run function hexahedron:repositioning/standard_floor
execute if score @e[tag=outer_core,limit=1] unfold matches 0 run say unsuccessful
