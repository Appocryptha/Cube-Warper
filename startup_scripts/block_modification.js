BlockEvents.modification(event => {
  event.modify('biomesoplenty:dried_salt', block => {
    block.soundType = 'basalt'
  })
})