ServerEvents.recipes(event => {

    event.remove({output: 'alexscaves:serene_salad'})
	event.recipes.farmersdelight.cooking(
	    [
			"undergarden:droopvine_item",
			"undergarden:droopvine_item"
		],
	    "miners_delight:weird_caviar",
	    1,
	    200,
	    "minecraft:bowl",
	);

	event.recipes.farmersdelight.cooking(
	    [
			"alexscaves:gummy_ring_red",
			"alexscaves:gummy_ring_pink",
			"alexscaves:gummy_ring_yellow",
			"alexscaves:gummy_ring_green",
			"alexscaves:gummy_ring_blue"
		],
	    "supplementaries:lumisene_bucket",
	    1,
	    200,
	    "minecraft:bucket",
	);

})