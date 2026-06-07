ServerEvents.recipes(event => {

	let bulk_corroding = (Input1, Output) => {
		event.custom({
			"type": "create_alexscaves_compat:corroding",
			"ingredients": [
			  {
			    "item": Input1
			  }
			],
			"results": [
			  {
			    "item": Output,
			    "count": 1
			  }
			]
		})
	}
	
	bulk_corroding(
		"ae2:charged_certus_quartz_crystal",
		"ae2:sky_dust"
	)

})