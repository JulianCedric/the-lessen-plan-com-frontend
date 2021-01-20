import React from 'react';
import { Image, Reveal } from 'semantic-ui-react';

class MyLab extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                <p>My Lab</p>
                <Reveal animated='move'>
    <Reveal.Content visible>
      <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src='https://react.semantic-ui.com/images/avatar/large/chris.jpg' size='small' />
    </Reveal.Content>
  </Reveal>
            </div>
        );
    }
}
 
export default MyLab;