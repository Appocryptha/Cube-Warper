# allow players to trigger the rebuild command
scoreboard players enable @a rebuild_hexahedron

# run rebuild function when any player triggers rebuild_hexahedron
execute as @a[scores={rebuild_hexahedron=1..},limit=1] run function hexahedron:trigger/rebuild