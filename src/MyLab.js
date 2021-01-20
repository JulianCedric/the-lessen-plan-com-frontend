import React from 'react';
import { Grid, Image, Reveal } from 'semantic-ui-react';
import AccordionExampleNested from './AccordionExampleNested';

class MyLab extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                <p>My Lab</p>

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
                <br/>
                <AccordionExampleNested />
                <br/>
            </div>
        );
    }
}
 
export default MyLab;