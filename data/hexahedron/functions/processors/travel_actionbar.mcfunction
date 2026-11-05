scoreboard players add @a[tag=travel_actionbar] travel_actionbar 1

title @a[tag=travel_actionbar,scores={travel_actionbar=5}] actionbar ["",{"translate":"message.hexahedron.travel_actionbar.1","bold":true,"color":"dark_aqua"},{"score":{"name":"@e[tag=core]","objective":"dimension_seed"},"bold":true,"color":"aqua"}, {"text":" .","bold":true,"color":"dark_aqua"}]
title @a[tag=travel_actionbar,scores={travel_actionbar=9}] actionbar ["",{"translate":"message.hexahedron.travel_actionbar.2","bold":true,"color":"dark_aqua"},{"score":{"name":"@e[tag=core]","objective":"dimension_seed"},"bold":true,"color":"aqua"}, {"text":" ..","bold":true,"color":"dark_aqua"}]
title @a[tag=travel_actionbar,scores={travel_actionbar=13}] actionbar ["",{"translate":"message.hexahedron.travel_actionbar.3","bold":true,"color":"dark_aqua"},{"score":{"name":"@e[tag=core]","objective":"dimension_seed"},"bold":true,"color":"aqua"}, {"text":" ...","bold":true,"color":"dark_aqua"}]
title @a[tag=travel_actionbar,scores={travel_actionbar=17}] actionbar ["",{"translate":"message.hexahedron.travel_actionbar.4","bold":true,"color":"dark_aqua"},{"score":{"name":"@e[tag=core]","objective":"dimension_seed"},"bold":true,"color":"aqua"}, {"text":"  ","bold":true,"color":"dark_aqua"}]


scoreboard players set @a[tag=travel_actionbar,scores={travel_actionbar=17}] travel_actionbar 0