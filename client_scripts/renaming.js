let rename_item = (Block, Name) => {

  ClientEvents.lang('en_us', event => {
    event.renameItem    (Block, Name)
  })  
}

let rename_block = (Block, Name) => {

  ClientEvents.lang('en_us', event => {
    event.renameItem    (Block, Name)
    event.renameBlock   (Block, Name)
  })  
}

rename_item("untagged_mobs:executable_redactor", "Redacted")

rename_block("actuallyadditions:lava_factory_casing", "Power Casing")
rename_block("forestry:carpenter", "Soldering Machine")

ClientEvents.lang('en_us', event => {
  event.add('fluid_type.untagged_mobs.fluid_blood', 'Blood')
})

