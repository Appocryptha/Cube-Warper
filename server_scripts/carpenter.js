ServerEvents.recipes(event => {

	let carpenter = (input1, input2, input3, input4, Fluid, pattern, output) => {
		event.custom({
  			"type": "forestry:carpenter",
  			"box": [],
  			"liquid": {
  			  "Amount": 100,
  			  "FluidName": Fluid
  			},
  			"recipe": {
  			  "type": "minecraft:crafting_shaped",
  			  "category": "misc",
  			  "key": {
  			    "1": {
  			      "item": input1
  			    },
  			    "2": {
  			      "item": input2
  			    },
  			    "3": {
  			      "item": input3
  			    },
  			    "4": {
  			      "item": input4
  			    }
  			  },
  			  "pattern": pattern,
  			  "result": {
  			    "item": output
  			  },
  			  "show_notification": true
  			},
  			"result": {
  			  "Count": 1,
  			  "id": output,
  			  "tag": {
  			    "T": 0
  			  }
  			},
  			"time": 20
		})
	}

	carpenter(
		"immersiveengineering:slab_treated_wood_horizontal",
		"kubejs:chocolate_chip",
		"minecraft:quartz",
		"clanginghowl:redstone_wire",
		"kubejs:solder_fluid",
			[
  				" 3 ",
  				"424",
  				" 1 "
  			],
		"immersiveengineering:component_electronic"
	)

	carpenter(
		"immersiveengineering:plate_duroplast",
		"ae2:logic_processor",
		"immersiveengineering:electron_tube",
		"immersiveengineering:wirecoil_electrum",
		"kubejs:solder_fluid",
			[
  				"3 3",
  				"424",
  				" 1 "
  			],
		"immersiveengineering:component_electronic_adv"
	)

})