ServerEvents.recipes(event => {

	event.recipes.createFilling('biomesoplenty:small_rose_quartz_bud', [
	  'thermal:quartz_dust',
	  Fluid.of('kubejs:rose_water', 250)
	])

	event.recipes.createFilling('biomesoplenty:medium_rose_quartz_bud', [
	  'biomesoplenty:small_rose_quartz_bud',
	  Fluid.of('kubejs:rose_water', 250)
	])

		event.recipes.createFilling('biomesoplenty:large_rose_quartz_bud', [
	  'biomesoplenty:medium_rose_quartz_bud',
	  Fluid.of('kubejs:rose_water', 250)
	])

	event.recipes.createFilling('create:rose_quartz', [
	  'biomesoplenty:large_rose_quartz_bud',
	  Fluid.of('kubejs:rose_water', 250)
	])
})