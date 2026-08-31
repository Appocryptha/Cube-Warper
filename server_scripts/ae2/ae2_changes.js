ServerEvents.recipes(event => {

	event.replaceInput({input: '#ae2:illuminated_panel' }, 
		'#ae2:illuminated_panel', 
		'ae2:terminal'       
	)

	event.replaceInput({input: 'ae2:fluix_glass_cable' }, 
		'ae2:fluix_glass_cable', 
		'ae2:fluix_smart_cable'       
	)

	event.remove({output: 'ae2:fluix_glass_cable'})
	event.remove({output: 'ae2:fluix_smart_cable'})
	event.shaped('16x ae2:fluix_smart_cable', [
		'RRR',
	  	'FFF',
	  	'RRR'  
	  	],{
	  	F: 'ae2:fluix_crystal',
	  	R: 'thermal:cured_rubber'
  	})

	event.shapeless('ae2:fluix_glass_cable', ['ae2:fluix_smart_cable'])
	event.shapeless('ae2:fluix_smart_cable', ['ae2:fluix_glass_cable'])

	event.remove({output: 'ae2:formation_core'})
	event.shaped('ae2:formation_core', [
		'   ',
	  	' D ',
	  	' S '  
	  	],{
	  	D: 'ae2:certus_quartz_dust',
	  	S: '#forge:plates/iron'
  	})

	event.remove({output: 'ae2:annihilation_core'})
	event.shaped('ae2:annihilation_core', [
		'   ',
	  	' D ',
	  	' S '  
	  	],{
	  	D: 'ae2:fluix_dust',
	  	S: '#forge:plates/iron'
  	})

	event.remove({output: 'aewireless:wireless_transceiver'})
	event.shaped('2x aewireless:wireless_transceiver', [
		'IWI',
	  	'LML',
	  	'IFI'  
	  	],{
	  	I: 'minecraft:iron_ingot',
	  	W: 'ae2:wireless_receiver',
	  	M: 'ae2:interface',
	  	L: 'ae2:logic_processor',
	  	F: 'alexscaves:fissile_core'
  	})

	event.remove({output: 'aeinfinitybooster:dimension_card'})
	event.shaped('aeinfinitybooster:dimension_card', [
		'WC ',
	  	'EQ ',
	  	'EF '  
	  	],{
	  	Q: 'ae2wtlib:quantum_bridge_card',
	  	W: 'clanginghowl:blaze_burner',
	  	C: 'kubejs:chocolate_chip',
		E: 'create:electron_tube',
		F: 'alexscaves:fissile_core'
  	})

	event.remove({output: 'ae2:wireless_access_point'})
	event.shaped('ae2:wireless_access_point', [
		' R ',
	  	'IWI ',
	  	'ICI '  
	  	],{
	  	R: 'ae2:wireless_receiver',
	  	W: 'aewireless:wireless_transceiver',
	  	C: 'kubejs:chocolate_chip',
		I: 'minecraft:iron_ingot'
  	})

})