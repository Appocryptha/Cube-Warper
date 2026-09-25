schedule function hexahedron:interval/1s 1s

function hexahedron:interval/cooldown_seconds
function hexahedron:machines/shrine_time_ticking
execute in hexahedron:brimstone_veil as @e[type=marker,tag=geyser_marker] at @s if entity @e[type=tnt,distance=..2] run function hexahedron:effects/geysers
function hexahedron:effects/hex_beam_1s
execute as @e[type=marker,tag=outer_core] at @s run tp @e[distance=..10,tag=] ~ ~-100 ~
function hexahedron:processors/portal_visibility
execute in hexahedron:dusk_islands as @a[nbt={Dimension:"hexahedron:dusk_islands"}] at @s run function hexahedron:effects/storm_sounds