schedule function hexahedron:interval/1s 1s

function hexahedron:interval/cooldown_seconds
function hexahedron:machines/shrine_time_ticking
execute in hexahedron:brimstone_veil as @e[type=marker,tag=geyser_marker] at @s if entity @e[type=tnt,distance=..2] run function hexahedron:effects/geysers