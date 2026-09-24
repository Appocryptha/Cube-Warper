### TEMINATE CURRENT POSITION
execute as @e[tag=outer_core] at @s run fill ~-8 ~-8 ~-8 ~8 ~8 ~8 air
kill @e[type=marker,tag=outer_core]

### INITIATE CONNECTION
execute as @e[type=immersive_portals:portal,name=main_cube] at @s run portal nbt {isVisible:false}
execute as @e[type=immersive_portals:portal,name=main_cube] at @s run portal set_portal_destination hexahedron:endless_hoard ~ ~ ~
execute at @e[type=minecraft:marker,tag=core] at @s in hexahedron:endless_hoard run summon marker ~ ~ ~ {NoGravity:1b,Tags:["outer_core"]}

### QUE REPOSITIONING
schedule function hexahedron:repositioning/standard_floor 5s

### START TELEPORTATION
tag @e[type=minecraft:marker,tag=core] add running

### KEEP YOUR FRIENDS INSIDE THE VEHICLE AT ALL TIMES
execute as @e[tag=core] at @s unless entity @a[limit=1,sort=nearest,distance=..50] run tp @a[limit=1] ~ ~-7 ~4