ServerEvents.recipes(event => {

    event.remove({output: 'ae2:charger'})
	event.shaped('ae2:charger', [
		'PCP', 
	  	'P  ',
	  	'PCP'  
	  	],{
	  	C: 'minecraft:copper_ingot',
	  	P: 'thermal:copper_plate'
  	})

    event.remove({output: 'ae2:crystal_resonance_generator'})
	event.shaped('ae2:crystal_resonance_generator', [
		'   ', 
	  	'ICI',
	  	'IQI'  
	  	],{
	  	I: 'create:iron_sheet',
	  	C: 'immersiveengineering:coil_lv',
	  	Q: 'ae2:calculation_processor'

  	})

    event.remove({output: 'immersiveengineering:hammer'})
	event.shaped('immersiveengineering:hammer', [
		' C ', 
	  	' SC',
	  	'S  '  
	  	],{
	  	C: 'minecraft:cobblestone',
	  	S: '#forge:rods/wooden'
  	})

	event.shaped('forestry:peat', [
		'PPP', 
	  	'PPP',
	  	'PPP'  
	  	],{
	  	P: '#hexahedron:peat_block'
  	})

    event.remove({output: 'create:piston_extension_pole'})
	event.shaped('8x create:piston_extension_pole', [
		' W ', 
	  	' S ',
	  	' W '  
	  	],{
	  	W: '#minecraft:planks',
	  	S: 'minecraft:cobblestone'
  	})

    event.remove({output: 'forestry:engine_peat'})
	event.shaped('forestry:engine_peat', [
		'WWW', 
	  	' P ',
	  	'CFC'  
	  	],{
	  	W: '#minecraft:planks',
	  	P: 'create:piston_extension_pole',
	  	C: 'minecraft:copper_ingot',
	  	F: 'minecraft:furnace'
  	})

    event.remove({output: 'miners_delight:copper_pot'})
	event.shaped('miners_delight:copper_pot', [
		' S ', 
	  	'C C',
	  	'CCC'  
	  	],{
	  	C: 'minecraft:copper_ingot',
	  	S: 'minecraft:wooden_shovel'
  	})

	event.shaped('kubejs:half_frame_bottom', [
		'   ', 
	  	'L L',
	  	'LLL'  
	  	],{
	  	L: 'thermal:lead_ingot'
  	})

	event.shaped('kubejs:half_frame_top', [
		'III', 
	  	'I I',
	  	'   '  
	  	],{
	  	I: 'minecraft:iron_ingot'
  	})

    event.remove({output: 'alexscaves:nuclear_furnace_component'})
	event.shaped('4x alexscaves:nuclear_furnace_component', [
		'SPS', 
	  	'PFP',
	  	'SPS'  
	  	],{
	  	S: 'clanginghowl:extraterrestrial_steel_plate',
	  	P: 'alexscaves:polymer_plate',
	  	F: 'alexscaves:fissile_core'
  	})

    event.remove({output: 'alexscaves:nuclear_furnace_component'})
	event.shaped('4x alexscaves:nuclear_furnace_component', [
		'SPS', 
	  	'PFP',
	  	'SPS'  
	  	],{
	  	S: 'immersiveengineering:plate_steel',
	  	P: 'alexscaves:polymer_plate',
	  	F: 'alexscaves:fissile_core'
  	})

    event.remove({output: 'clanginghowl:crystal_former'})
	event.shaped('clanginghowl:crystal_former', [
		' G ', 
	  	' B ',
	  	' F '  
	  	],{
	  	G: 'clanginghowl:extraterrestrial_steel_grate',
	  	B: 'minecraft:blue_ice',
	  	F: 'create:fluid_tank'
  	})

    event.remove({output: 'forestry:fabricator'})
	event.shaped('forestry:fabricator', [
		'ITI', 
	  	'LFL',
	  	'IEI'  
	  	],{
	  	I: 'minecraft:iron_ingot',
	  	T: 'toughasnails:thermometer',
	  	F: 'thermal:machine_crafter',
	  	L: 'ae2:logic_processor',
	  	E: 'immersiveengineering:furnace_heater'
  	})

    event.remove({output: 'botania:apothecary_mossy'})
    event.remove({output: 'botania:apothecary_deepslate'})
    event.remove({output: 'botania:apothecary_default'})
    event.remove({output: 'botania:apothecary_livingrock'})
	event.shaped('botania:apothecary_livingrock', [
		'L L', 
	  	' L ',
	  	'LLL'  
	  	],{
	  	L: 'botania:livingrock'
  	})

    event.remove({output: 'mekanism:steel_casing'})
	event.shaped('mekanism:steel_casing', [
		'OCO', 
	  	'SMS',
	  	'OSO'  
	  	],{
	  	C: 'kubejs:cooling_unit',
	  	O: 'mekanism:ingot_osmium',
	  	S: 'immersiveengineering:plate_steel',
	  	M: 'kubejs:chocolate_chip'
  	})

	event.shaped('kubejs:cooling_unit', [
		' P ', 
	  	'SCS',
	  	' S '  
	  	],{
	  	P: 'create:propeller',
	  	C: 'clanginghowl:cryogenic_fuel',
	  	S: 'immersiveengineering:plate_steel'
  	})

    event.remove({output: 'ae2:controller'})
	event.shaped('ae2:controller', [
		'LLL', 
	  	'EFE',
	  	'CCC'  
	  	],{
	  	L: 'ae2:logic_processor',
	  	E: 'forestry:electron_tube_emerald',
	  	F: 'alexscaves:fissile_core',
	  	C: 'ae2:calculation_processor'
  	})

    event.remove({output: 'thermal:dynamo_magmatic'})
	event.shaped('thermal:dynamo_magmatic', [
		' R ', 
	  	'ITI',
	  	'CFC'  
	  	],{
	  	R: 'minecraft:redstone',
	  	I: 'minecraft:iron_ingot',
	  	T: 'toughasnails:thermometer',
	  	C: 'minecraft:copper_ingot',
	  	F: 'create:fluid_tank'
  	})

    event.remove({output: 'mekanism:basic_universal_cable'})
	event.shaped('8x mekanism:basic_universal_cable', [
		'RRR', 
	  	'CCC',
	  	'RRR'  
	  	],{
	  	R: 'minecraft:redstone',
	  	C: 'immersiveengineering:wirecoil_copper'
  	})

    event.remove({output: 'clanginghowl:redstone_wire'})
	event.shaped('3x clanginghowl:redstone_wire', [
		'RRR', 
	  	'CCC',
	  	'RRR'  
	  	],{
	  	R: 'minecraft:redstone',
	  	C: 'immersiveengineering:wire_copper'
  	})

	event.shaped('immersiveengineering:wirecutter', [
		'SC ', 
	  	' S ',
	  	'   '  
	  	],{
	  	S: 'minecraft:stick',
	  	C: 'minecraft:copper_ingot'
  	})

    event.remove({output: 'ae2:terminal'})
	event.shaped('ae2:terminal', [
		' RG', 
	  	'ICG',
	  	' RG'  
	  	],{
	  	G: 'minecraft:glass',
	  	R: 'clanginghowl:redstone_wire',
	  	C: 'ae2:calculation_processor',
	  	I: 'create:iron_sheet'
  	})

    event.remove({output: 'ae2:drive'})
	event.shaped('ae2:drive', [
		'ICI', 
	  	'F F',
	  	'ICI'  
	  	],{
	  	F: 'ae2:fluix_glass_cable',
	  	C: 'ae2:calculation_processor',
	  	I: 'minecraft:iron_ingot'
  	})

    event.remove({output: 'ae2:inscriber'})
	event.shaped('ae2:inscriber', [
		'IQI', 
	  	'RC ',
	  	'IQI'  
	  	],{
	  	Q: 'ae2:certus_quartz_crystal',
	  	R: 'clanginghowl:redstone_wire',
	  	C: 'ae2:charger',
	  	I: 'minecraft:iron_ingot'
  	})

    event.remove({output: 'clanginghowl:energy_battery'})
	event.shaped(Item.of('clanginghowl:energy_battery', '{Energy:0,"Max Energy":2000}'), [
		' E ', 
	  	'ICI',
	  	' E '  
	  	],{
	  	E: 'clanginghowl:extraterrestrial_steel_plate',
	  	C: 'immersiveengineering:wirecoil_copper',
	  	I: 'minecraft:copper_ingot'
  	})

    event.remove({output: 'clanginghowl:stationary_charging_station'})
	event.shaped('clanginghowl:stationary_charging_station', [
		'L L', 
	  	'BCB',
	  	'EEE'  
	  	],{
	  	E: 'clanginghowl:extraterrestrial_steel_plate',
	  	B: 'clanginghowl:energy_battery',
	  	L: 'minecraft:lightning_rod',
		C: 'clanginghowl:extraterrestrial_energy_crystal'
  	})

    event.remove({output: 'clanginghowl:advanced_hand_drill'})
	event.shaped('clanginghowl:advanced_hand_drill', [
		'DC ', 
	  	'REC',
	  	' BW'  
	  	],{
	  	E: 'clanginghowl:extraterrestrial_steel_ingot',
		D: 'thermal:drill_head',
		C: 'minecraft:copper_ingot',
	  	B: 'clanginghowl:energy_battery',
	  	R: 'clanginghowl:steel_rod',
		W: 'clanginghowl:redstone_wire'
  	})

    event.remove({output: 'clanginghowl:advanced_chainsword'})
	event.shaped('clanginghowl:advanced_chainsword', [
		'CEW', 
	  	'CEB',
	  	' RI'  
	  	],{
	  	C: 'clanginghowl:chainsaw_teeth',
	  	E: 'clanginghowl:extraterrestrial_steel_ingot',
		I: 'minecraft:copper_ingot',
	  	B: 'clanginghowl:energy_battery',
	  	R: 'clanginghowl:steel_rod',
		W: 'clanginghowl:redstone_wire'
  	})

    event.remove({output: 'clanginghowl:advanced_chainsaw'})
	event.shaped('clanginghowl:advanced_chainsaw', [
		' IB', 
	  	'CEW',
	  	'CC '  
	  	],{
	  	C: 'clanginghowl:chainsaw_teeth',
	  	E: 'clanginghowl:extraterrestrial_steel_ingot',
		I: 'minecraft:copper_ingot',
	  	B: 'clanginghowl:energy_battery',
		W: 'clanginghowl:redstone_wire'
  	})

    event.remove({output: 'thermal:machine_chiller'})
	event.shaped('thermal:machine_chiller', [
		'ISI', 
	  	'GFG',
	  	'ICI'  
	  	],{
	  	I: 'minecraft:iron_ingot',
	  	S: 'alexscaves:sundae',
		G: 'immersiveengineering:insulating_glass',
	  	F: 'thermal:machine_frame',
		C: 'brewinandchewin:ice_crate'
  	})

    event.remove({output: 'thermal:machine_crucible'})
	event.shaped('thermal:machine_crucible', [
		'ICI', 
	  	'HFH',
	  	'IRI'  
	  	],{
	  	I: 'minecraft:iron_ingot',
	  	C: 'kubejs:chocolate_chip',
		H: 'immersiveengineering:furnace_heater',
	  	F: 'thermal:machine_frame',
		R: 'botania:rune_fire'
  	})

    event.remove({output: 'immersiveengineering:cokebrick'})
	event.shaped('3x immersiveengineering:cokebrick', [
		'LBL',
	  	'BFB',
	  	'LBL'  
	  	],{
	  	L: 'alexscaves:limestone',
	  	B: 'supplementaries:ash_brick',
	  	F: 'create:cinder_flour'
  	})

    event.remove({output: 'caverns_and_chasms:barometer'})
    event.remove({output: 'supplementaries:altimeter'})

	event.replaceInput({input: 'ae2:quartz_glass' }, 
		'ae2:quartz_glass', 
		'minecraft:glass'        
)

})