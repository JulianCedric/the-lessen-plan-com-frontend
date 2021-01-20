import React from 'react'
import { Accordion } from 'semantic-ui-react'

const level1Panels = [
  { key: 'panel-1a', title: 'Move It..', content: 'To make it invisible, I can move it from its current usual location __________ ( e.g. on its usb charger connected to the right side of my laptop ) to this new location __________ ( e.g. on the inside pocket of my travel suitcase, which I store underneath the basement stairs ).' },
  { key: 'panel-ba', title: 'Book It..', content: '*Insert Dropdown Menu Here*' },
]

const Level1Content = (
  <div>
    How can I make it invisible?
    <Accordion.Accordion panels={level1Panels} />
  </div>
)

const level2Panels = [
  { key: 'panel-2a', title: 'Level 2A', content: 'Level 2A Contents' },
  { key: 'panel-2b', title: 'Level 2B', content: 'Level 2B Contents' },
]

const Level2Content = (
  <div>
    Welcome to level 2
    <Accordion.Accordion panels={level2Panels} />
  </div>
)

const level3Panels = [
    { key: 'panel-3a', title: 'Level 3A', content: 'Level 3A Contents' },
    { key: 'panel-ba', title: 'Level 3B', content: 'Level 3B Contents' },
  ]
  
  const Level3Content = (
    <div>
      Welcome to level 3
      <Accordion.Accordion panels={level3Panels} />
    </div>
  )
  
  const level4Panels = [
    { key: 'panel-4a', title: 'Level 4A', content: 'Level 4A Contents' },
    { key: 'panel-4b', title: 'Level 4B', content: 'Level 4B Contents' },
  ]
  
  const Level4Content = (
    <div>
      Welcome to level 4
      <Accordion.Accordion panels={level4Panels} />
    </div>
  )

const rootPanels = [
  { key: 'panel-1', title: 'CUE', content: { content: Level1Content } },
  { key: 'panel-2', title: 'CRAVING', content: { content: Level2Content } },
  { key: 'panel-3', title: 'RESPONSE', content: { content: Level3Content } },
  { key: 'panel-4', title: 'REWARD', content: { content: Level4Content } },
]

const HabitLoop = () => (
  <Accordion defaultActiveIndex={0} panels={rootPanels} styled />
)

export default HabitLoop