ServerEvents.recipes(event => {

	let machine_insolator = (Input, Output) => {
        event.custom({
            "type": "thermal:insolator",
            "ingredient": {
                "item": Input
            },
            "result": [
                {
                    "item": Output,
                    "count": 2
                }
            ]
        })
    }

    machine_insolator("regions_unexplored:alpha_rose", "regions_unexplored:alpha_rose")
    machine_insolator("regions_unexplored:alpha_dandelion", "regions_unexplored:alpha_dandelion")
	
})