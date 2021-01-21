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

<Grid centered columns={2}>

<Grid.Row>
    <Reveal animated='move down'>
        <Reveal.Content visible>
            <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' />
        </Reveal.Content>
        <Reveal.Content hidden>
            <Image src='https://react.semantic-ui.com/images/avatar/large/chris.jpg' size='small' />
        </Reveal.Content>
    </Reveal>
    <Reveal animated='move down'>
        <Reveal.Content visible>
            <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' />
        </Reveal.Content>
        <Reveal.Content hidden>
            <Image src='https://react.semantic-ui.com/images/avatar/large/chris.jpg' size='small' />
        </Reveal.Content>
    </Reveal>
</Grid.Row>

<Grid.Row>
    <Reveal animated='move up'>
        <Reveal.Content visible>
            <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' />
        </Reveal.Content>
        <Reveal.Content hidden>
            <Image src='https://react.semantic-ui.com/images/avatar/large/chris.jpg' size='small' />
        </Reveal.Content>
    </Reveal>
    <Reveal animated='move up'>
        <Reveal.Content visible>
            <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' />
        </Reveal.Content>
        <Reveal.Content hidden>
            <Image src='https://react.semantic-ui.com/images/avatar/large/chris.jpg' size='small' />
        </Reveal.Content>
    </Reveal>
</Grid.Row>

</Grid>






// Write a function that associates object a (user) with object b (lessonPlan). 

let user = { user_id: 1, name: 'Julian' }

let lessonPlan = { lessonPlan_id: 1, type: 'Morning' }

// ** Write your function here. **

let user_lessonPlan = { ...user, ...lessonPlan }

merge(a,b) {
  console.log(a,b)
}

merge(user, lessonPlan)









import React from "react";
import ReactToPrint from "react-to-print";

class ComponentToPrint extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <th>column 1</th>
          <th>column 2</th>
          <th>column 3</th>
        </thead>
        <tbody>
          <tr>
            <td>data 1</td>
            <td>data 2</td>
            <td>data 3</td>
          </tr>
          <tr>
            <td>data 1</td>
            <td>data 2</td>
            <td>data 3</td>
          </tr>
          <tr>
            <td>data 1</td>
            <td>data 2</td>
            <td>data 3</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Example;





const LESSENPLANS = [
  {
    id: 1,
    user_id: 1,
    type: 'morning',
    habitDesc: '',
    habitBad: false,
    habitLoopItemA: 'Cue',
    habitLoopItemB: 'Craving',
    habitLoopItemC: 'Response',
    habitLoopItemD: 'Reward',
    habitTracker: 'Under Construction'
  }
]

import React from 'react';

class Create extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                <p>Create</p>
            </div>
        );
    }
}
 
export default Create;