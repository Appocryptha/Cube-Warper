ItemEvents.tooltip(event => {

  event.addAdvanced('kubejs:vector_operator_basic', (item, advanced, text) => {
    text.add(1, Text.gray('Adds 1').bold(true))  
  })

  event.addAdvanced('kubejs:vector_operator_charged', (item, advanced, text) => {
    text.add(1, Text.gray('Multiplies by 3').bold(true))  
  })

  event.addAdvanced('kubejs:vector_operator_fluix', (item, advanced, text) => {
    text.add(1, Text.gray('Adds 2').bold(true))  
  })

  event.addAdvanced('kubejs:vector_operator_nuclear', (item, advanced, text) => {
    text.add(1, Text.gray('Multiplies by 4').bold(true))  
  })

  event.addAdvanced('kubejs:vector_operator_blaze', (item, advanced, text) => {
    text.add(1, Text.gray('Multiplies by 6').bold(true))  
  })

  event.addAdvanced('kubejs:vector_operator_lightning', (item, advanced, text) => {
    text.add(1, Text.gray('Multiplies by 8').bold(true))  
  })

  event.addAdvanced('kubejs:vector_operator_eye', (item, advanced, text) => {
    text.add(1, Text.gray('Divides by 0').bold(true))  
  })
  

  //(1) +1 → total 3  → +3 → [1, 2, 3]
  //(2) *3 → total 6  → +3 → [4, 6, 9]
  //(3) +2 → total 11 → +5 → [5, 7, 8, 12, 18]
  //(4) *4 → total 15 → +4 → [10, 16, 24, 32]
  //(5) *6 → total 20 → +5 → [13, 14, 36, 48, 72]
  //(6) *8 → total 24 → +4 → [17, 64, 96, 128]
  //(7) -1 → total 26 → +2 → [11, 15, negative]

  //(8) *5 → total 33 → +7 → [20, 25, 30, 40, 50, 60, 80]
  //(9) *7 → total 43 → +10 → [21, 28, 35, 42, 49, 56, 70, 84, 98, 112]

})