// Prev:
  // User can create an account ( signup )

// Next: 
  // Resolve fetch issue ( Login.js - ln.23 - handleSubmitSignUp )

<img src="/images/lessismore.png" alt=""/>

import React from 'react'
import { Accordion } from 'semantic-ui-react'

const level1Panels = [
  { key: 'panel-1a', title: 'Level 1A', content: 'Level 1A Contents' },
  { key: 'panel-ba', title: 'Level 1B', content: 'Level 1B Contents' },
]

const Level1Content = (
  <div>
    Welcome to level 1
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
  { key: 'panel-1', title: 'Level 1', content: { content: Level1Content } },
  { key: 'panel-2', title: 'Level 2', content: { content: Level2Content } },
  { key: 'panel-3', title: 'Level 3', content: { content: Level3Content } },
  { key: 'panel-4', title: 'Level 4', content: { content: Level4Content } },
]

const HabitLoop = () => (
  <Accordion defaultActiveIndex={0} panels={rootPanels} styled />
)

export default HabitLoop