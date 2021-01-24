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

// When a user clicks [ Create New Lessen Plan ], the app creates a new, blank lessenPlan obj.
  // Step 1: Form to add a bad habit. 



import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
  {
    menuItem: 'Tab 1',
    render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
  },
  {
    menuItem: 'Tab 2',
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: 'Tab 3',
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
]

const Update = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default Update;









import React from 'react';
import { Button, Tab } from 'semantic-ui-react';

const panes = [
    {
      menuItem: 'Tab 1',
      render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
    },
    {
      menuItem: 'Tab 2',
      render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
    },
    {
      menuItem: 'Tab 3',
      render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
    },
  ]

  const Update = () => (
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} style={{ width: '600px' }} />
  )
  
  export default Update;






  

// import { createMedia } from '@artsy/fresnel'
// import PropTypes from 'prop-types'
// import React, { Component } from 'react'
// import {
//   Button,
//   Container,
//   Divider,
//   Grid,
//   Header,
//   Icon,
//   Image,
//   List,
//   Menu,
//   Segment,
//   Sidebar,
//   Visibility,
// } from 'semantic-ui-react'

// const { MediaContextProvider, Media } = createMedia({
//   breakpoints: {
//     mobile: 0,
//     tablet: 768,
//     computer: 1024,
//   },
// })

// /* Heads up!
//  * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
//  * components for such things.
//  */
// const HomepageHeading = ({ mobile }) => (
//   <Container text>
//     <Header
//       as='h1'
//       content='Imagine-a-Company'
//       inverted
//       style={{
//         fontSize: mobile ? '2em' : '4em',
//         fontWeight: 'normal',
//         marginBottom: 0,
//         marginTop: mobile ? '1.5em' : '3em',
//       }}
//     />
//     <Header
//       as='h2'
//       content='Do whatever you want when you want to.'
//       inverted
//       style={{
//         fontSize: mobile ? '1.5em' : '1.7em',
//         fontWeight: 'normal',
//         marginTop: mobile ? '0.5em' : '1.5em',
//       }}
//     />
//     <Button primary size='huge'>
//       Get Started
//       <Icon name='right arrow' />
//     </Button>
//   </Container>
// )

// HomepageHeading.propTypes = {
//   mobile: PropTypes.bool,
// }

// /* Heads up!
//  * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
//  * It can be more complicated, but you can create really flexible markup.
//  */
// class DesktopContainer extends Component {
//   state = {}

//   hideFixedMenu = () => this.setState({ fixed: false })
//   showFixedMenu = () => this.setState({ fixed: true })

//   render() {
//     const { children } = this.props
//     const { fixed } = this.state

//     return (
//       <Media greaterThan='mobile'>
//         <Visibility
//           once={false}
//           onBottomPassed={this.showFixedMenu}
//           onBottomPassedReverse={this.hideFixedMenu}
//         >
//           <Segment
//             inverted
//             textAlign='center'
//             style={{ minHeight: 700, padding: '1em 0em' }}
//             vertical
//           >
//             <Menu
//               fixed={fixed ? 'top' : null}
//               inverted={!fixed}
//               pointing={!fixed}
//               secondary={!fixed}
//               size='large'
//             >
//               <Container>
//                 <Menu.Item as='a' active>
//                   Home
//                 </Menu.Item>
//                 <Menu.Item as='a'>Work</Menu.Item>
//                 <Menu.Item as='a'>Company</Menu.Item>
//                 <Menu.Item as='a'>Careers</Menu.Item>
//                 <Menu.Item position='right'>
//                   <Button as='a' inverted={!fixed}>
//                     Log in
//                   </Button>
//                   <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
//                     Sign Up
//                   </Button>
//                 </Menu.Item>
//               </Container>
//             </Menu>
//             <HomepageHeading />
//           </Segment>
//         </Visibility>

//         {children}
//       </Media>
//     )
//   }
// }

// DesktopContainer.propTypes = {
//   children: PropTypes.node,
// }

// class MobileContainer extends Component {
//   state = {}

//   handleSidebarHide = () => this.setState({ sidebarOpened: false })

//   handleToggle = () => this.setState({ sidebarOpened: true })

//   render() {
//     const { children } = this.props
//     const { sidebarOpened } = this.state

//     return (
//       <Media as={Sidebar.Pushable} at='mobile'>
//         <Sidebar.Pushable>
//           <Sidebar
//             as={Menu}
//             animation='overlay'
//             inverted
//             onHide={this.handleSidebarHide}
//             vertical
//             visible={sidebarOpened}
//           >
//             <Menu.Item as='a' active>
//               Home
//             </Menu.Item>
//             <Menu.Item as='a'>Work</Menu.Item>
//             <Menu.Item as='a'>Company</Menu.Item>
//             <Menu.Item as='a'>Careers</Menu.Item>
//             <Menu.Item as='a'>Log in</Menu.Item>
//             <Menu.Item as='a'>Sign Up</Menu.Item>
//           </Sidebar>

//           <Sidebar.Pusher dimmed={sidebarOpened}>
//             <Segment
//               inverted
//               textAlign='center'
//               style={{ minHeight: 350, padding: '1em 0em' }}
//               vertical
//             >
//               <Container>
//                 <Menu inverted pointing secondary size='large'>
//                   <Menu.Item onClick={this.handleToggle}>
//                     <Icon name='sidebar' />
//                   </Menu.Item>
//                   <Menu.Item position='right'>
//                     <Button as='a' inverted>
//                       Log in
//                     </Button>
//                     <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
//                       Sign Up
//                     </Button>
//                   </Menu.Item>
//                 </Menu>
//               </Container>
//               <HomepageHeading mobile />
//             </Segment>

//             {children}
//           </Sidebar.Pusher>
//         </Sidebar.Pushable>
//       </Media>
//     )
//   }
// }

// MobileContainer.propTypes = {
//   children: PropTypes.node,
// }

// const ResponsiveContainer = ({ children }) => (
//   /* Heads up!
//    * For large applications it may not be best option to put all page into these containers at
//    * they will be rendered twice for SSR.
//    */
//   <MediaContextProvider>
//     <DesktopContainer>{children}</DesktopContainer>
//     <MobileContainer>{children}</MobileContainer>
//   </MediaContextProvider>
// )

// ResponsiveContainer.propTypes = {
//   children: PropTypes.node,
// }

// const HomepageLayout = () => (
//   <ResponsiveContainer>
//     <Segment style={{ padding: '8em 0em' }} vertical>
//       <Grid container stackable verticalAlign='middle'>
//         <Grid.Row>
//           <Grid.Column width={8}>
//             <Header as='h3' style={{ fontSize: '2em' }}>
//               We Help Companies and Companions
//             </Header>
//             <p style={{ fontSize: '1.33em' }}>
//               We can give your company superpowers to do things that they never thought possible.
//               Let us delight your customers and empower your needs... through pure data analytics.
//             </p>
//             <Header as='h3' style={{ fontSize: '2em' }}>
//               We Make Bananas That Can Dance
//             </Header>
//             <p style={{ fontSize: '1.33em' }}>
//               Yes that's right, you thought it was the stuff of dreams, but even bananas can be
//               bioengineered.
//             </p>
//           </Grid.Column>
//           <Grid.Column floated='right' width={6}>
//             <Image bordered rounded size='large' src='/images/wireframe/white-image.png' />
//           </Grid.Column>
//         </Grid.Row>
//         <Grid.Row>
//           <Grid.Column textAlign='center'>
//             <Button size='huge'>Check Them Out</Button>
//           </Grid.Column>
//         </Grid.Row>
//       </Grid>
//     </Segment>

//     <Segment style={{ padding: '0em' }} vertical>
//       <Grid celled='internally' columns='equal' stackable>
//         <Grid.Row textAlign='center'>
//           <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
//             <Header as='h3' style={{ fontSize: '2em' }}>
//               "What a Company"
//             </Header>
//             <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
//           </Grid.Column>
//           <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
//             <Header as='h3' style={{ fontSize: '2em' }}>
//               "I shouldn't have gone with their competitor."
//             </Header>
//             <p style={{ fontSize: '1.33em' }}>
//               <Image avatar src='/images/avatar/large/nan.jpg' />
//               <b>Nan</b> Chief Fun Officer Acme Toys
//             </p>
//           </Grid.Column>
//         </Grid.Row>
//       </Grid>
//     </Segment>

//     <Segment style={{ padding: '8em 0em' }} vertical>
//       <Container text>
//         <Header as='h3' style={{ fontSize: '2em' }}>
//           Breaking The Grid, Grabs Your Attention
//         </Header>
//         <p style={{ fontSize: '1.33em' }}>
//           Instead of focusing on content creation and hard work, we have learned how to master the
//           art of doing nothing by providing massive amounts of whitespace and generic content that
//           can seem massive, monolithic and worth your attention.
//         </p>
//         <Button as='a' size='large'>
//           Read More
//         </Button>

//         <Divider
//           as='h4'
//           className='header'
//           horizontal
//           style={{ margin: '3em 0em', textTransform: 'uppercase' }}
//         >
//           <a href='#'>Case Studies</a>
//         </Divider>

//         <Header as='h3' style={{ fontSize: '2em' }}>
//           Did We Tell You About Our Bananas?
//         </Header>
//         <p style={{ fontSize: '1.33em' }}>
//           Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
//           it's really true. It took years of gene splicing and combinatory DNA research, but our
//           bananas can really dance.
//         </p>
//         <Button as='a' size='large'>
//           I'm Still Quite Interested
//         </Button>
//       </Container>
//     </Segment>

//     <Segment inverted vertical style={{ padding: '5em 0em' }}>
//       <Container>
//         <Grid divided inverted stackable>
//           <Grid.Row>
//             <Grid.Column width={3}>
//               <Header inverted as='h4' content='About' />
//               <List link inverted>
//                 <List.Item as='a'>Sitemap</List.Item>
//                 <List.Item as='a'>Contact Us</List.Item>
//                 <List.Item as='a'>Religious Ceremonies</List.Item>
//                 <List.Item as='a'>Gazebo Plans</List.Item>
//               </List>
//             </Grid.Column>
//             <Grid.Column width={3}>
//               <Header inverted as='h4' content='Services' />
//               <List link inverted>
//                 <List.Item as='a'>Banana Pre-Order</List.Item>
//                 <List.Item as='a'>DNA FAQ</List.Item>
//                 <List.Item as='a'>How To Access</List.Item>
//                 <List.Item as='a'>Favorite X-Men</List.Item>
//               </List>
//             </Grid.Column>
//             <Grid.Column width={7}>
//               <Header as='h4' inverted>
//                 Footer Header
//               </Header>
//               <p>
//                 Extra space for a call to action inside the footer that could help re-engage users.
//               </p>
//             </Grid.Column>
//           </Grid.Row>
//         </Grid>
//       </Container>
//     </Segment>
//   </ResponsiveContainer>
// )

// export default HomepageLayout