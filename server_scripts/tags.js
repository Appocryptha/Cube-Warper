ServerEvents.tags('block', event => {
  event.add('minecraft:dirt', 'minecraft:snow_block')
  event.add('minecraft:nylium', 'biomesoplenty:flesh')
  event.add('endergetic:poise_plantable', 'biomesoplenty:black_sand')
  event.add('minecraft:dirt', 'endergetic:eumus_poismoss')
  event.add('minecraft:nylium', 'biomeswevegone:purple_sand')
  event.add('minecraft:nylium', 'minecraft:soul_soil')
  event.add('minecraft:nylium', 'create:scoria')
  event.add('regions_unexplored:stone_plant_can_survive_on', 'regions_unexplored:prismaglass')
  event.add('minecraft:base_stone_overworld', 'regions_unexplored:prismaglass')
  event.add('minecraft:nylium', 'regions_unexplored:glistering_wart')

  event.add('hexahedron_frame', 'kubejs:warping_frame')
  event.add('hexahedron_frame', 'kubejs:warping_frame_rusted_half')
  event.add('hexahedron_frame', 'kubejs:warping_frame_rusted')
  event.add('hexahedron_frame', 'kubejs:warping_vent')
  event.add('hexahedron_frame', 'kubejs:warping_vent_rusted_half')
  event.add('hexahedron_frame', 'kubejs:warping_vent_rusted')
  event.add('hexahedron_frame', 'kubejs:stacked_warping_frame_slab')
  event.add('hexahedron_frame', 'kubejs:warping_interface')
  event.add('hexahedron_frame', 'kubejs:warping_controls')
  event.add('hexahedron_frame', 'kubejs:warping_disc_drive')

  event.add('biomesoplenty:flesh_decoration_placeable', 'clanginghowl:technoflesh_block')
  event.add('biomesoplenty:flesh_decoration_placeable', 'dustrial_decor:padded_block')
  event.add('biomesoplenty:flesh_decoration_placeable', 'dustrial_decor:mini_padded_block')

  event.add('minecraft:dirt', 'alexscaves:block_of_frosting')
  event.add('minecraft:dirt', 'darkerdepths:darkslate')

  event.add('minecraft:sand', 'infernalexp:shimmer_sand')
  event.add('minecraft:dirt', 'infernalexp:shimmer_sand')

})

ServerEvents.tags('item', event => {

  event.remove('minecraft:stone_crafting_materials', 'minecraft:blackstone')
  event.remove('minecraft:stone_tool_materials', 'minecraft:blackstone')

	event.add('hexahedron:peat_block', 'biomeswevegone:peat')
	event.add('hexahedron:peat_block', 'regions_unexplored:peat_dirt')
	event.add('hexahedron:peat_block', 'regions_unexplored:peat_mud')

	event.add('thermal:crafting/dies', 'immersiveengineering:mold_plate')
	event.add('thermal:crafting/dies', 'immersiveengineering:mold_wire')
	event.add('thermal:crafting/dies', 'immersiveengineering:mold_rod')
	event.add('thermal:crafting/dies', 'immersiveengineering:mold_gear')
	event.add('thermal:crafting/dies', 'thermal:chiller_rod_cast')
	event.add('thermal:crafting/dies', 'thermal:chiller_ingot_cast')
	event.add('thermal:crafting/dies', 'thermal:chiller_ball_cast')
	event.add('thermal:crafting/dies', 'ae2:silicon_press')
	event.add('thermal:crafting/dies', 'ae2:calculation_processor_press')
	event.add('thermal:crafting/dies', 'ae2:logic_processor_press')
	event.add('thermal:crafting/dies', 'ae2:engineering_processor_press')

	event.add('thermal:crafting/casts', 'immersiveengineering:mold_plate')
	event.add('thermal:crafting/casts', 'immersiveengineering:mold_wire')
	event.add('thermal:crafting/casts', 'immersiveengineering:mold_rod')
	event.add('thermal:crafting/casts', 'immersiveengineering:mold_gear')
	event.add('thermal:crafting/casts', 'thermal:chiller_rod_cast')
	event.add('thermal:crafting/casts', 'thermal:chiller_ingot_cast')
	event.add('thermal:crafting/casts', 'thermal:chiller_ball_cast')
	event.add('thermal:crafting/casts', 'ae2:silicon_press')
	event.add('thermal:crafting/casts', 'ae2:calculation_processor_press')
	event.add('thermal:crafting/casts', 'ae2:logic_processor_press')
	event.add('thermal:crafting/casts', 'ae2:engineering_processor_press')

  event.add('create:upright_on_belt', 'biomesoplenty:small_rose_quartz_bud')
  event.add('create:upright_on_belt', 'biomesoplenty:medium_rose_quartz_bud')
  event.add('create:upright_on_belt', 'biomesoplenty:large_rose_quartz_bud')
  event.add('create:upright_on_belt', 'biomesoplenty:rose_quartz_cluster')
  event.add('create:upright_on_belt', 'create:rose_quartz')

})

ServerEvents.tags("worldgen/biome", (event) => {

  event.add('c:is_wet', 'hexahedron:storm_islands')

})