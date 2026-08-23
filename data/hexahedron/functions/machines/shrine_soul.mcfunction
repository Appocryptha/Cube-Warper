summon marker ~ ~ ~ {Tags:["soul_spawn"]}
summon marker ~ ~ ~ {Tags:["soul_spawn"]}
summon marker ~ ~ ~ {Tags:["soul_spawn"]}
summon marker ~ ~ ~ {Tags:["soul_spawn"]}
summon marker ~ ~ ~ {Tags:["soul_spawn"]}
summon marker ~ ~ ~ {Tags:["soul_spawn"]}
summon marker ~ ~ ~ {Tags:["soul_spawn"]}

say spawn

spreadplayers ~ ~ 10 10 false @e[type=marker,tag=soul_spawn]

execute as @e[type=marker,tag=soul_spawn] run particle create:soul ~ ~ ~ 1 0.3 1 0 10 force
execute as @e[type=marker,tag=soul_spawn] run summon wither_skeleton ~ ~ ~ {HandItems:[{id:"caverns_and_chasms:necromium_sword",Count:1b},{}],ArmorItems:[{id:"caverns_and_chasms:necromium_boots",Count:1b},{id:"caverns_and_chasms:necromium_leggings",Count:1b},{id:"caverns_and_chasms:necromium_chestplate",Count:1b},{id:"caverns_and_chasms:necromium_helmet",Count:1b}]}

summon wither_skeleton ~ ~ ~ {HandItems:[{id:"minecraft:iron_sword",Count:1b},{}],HandDropChances:[0.200F,0.085F],ArmorItems:[{id:"minecraft:iron_boots",Count:1b},{id:"minecraft:iron_leggings",Count:1b},{id:"minecraft:chest",Count:1b},{id:"minecraft:iron_helmet",Count:1b}],ArmorDropChances:[0.200F,0.200F,0.200F,0.200F]}

#summon wither_skeleton ~ ~ ~ {HandItems:[
#{id:"caverns_and_chasms:necromium_sword",Count:1b},{}],ArmorItems:[
#{id:"caverns_and_chasms:necromium_boots",Count:1b},
#{id:"caverns_and_chasms:necromium_leggings",Count:1b},
#{id:"caverns_and_chasms:necromium_chestplate",Count:1b},
#{id:"caverns_and_chasms:necromium_helmet",Count:1b}]}

kill @e[type=marker,tag=soul_spawn]