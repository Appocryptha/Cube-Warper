scoreboard objectives add runtime dummy
scoreboard objectives add time dummy
scoreboard objectives add hexahedron_portals dummy
scoreboard objectives add unfold dummy

scoreboard objectives add cube_time dummy

setworldspawn 0 100 0
execute in overworld run weather clear 999999999d

gamerule commandBlockOutput false