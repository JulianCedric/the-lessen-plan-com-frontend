import React, { Component } from 'react'
import { Button, Dropdown, Grid, Segment } from 'semantic-ui-react'

const options = [
  { key: 1, text: '30 min', value: 30 },
  { key: 2, text: '60 min', value: 60 },
  { key: 3, text: '90 min', value: 90 },
]

export default class DropdownExampleControlled extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value });

  handleClick = (e, userTime) => {
    let newUserTime = this.state.value;
    console.log("newUserTime:", newUserTime);
    this.props.handleStart(newUserTime);
  }

  render() {
    const { value } = this.state;
    console.log("Current state of 'value':", value);
    return (
      <Grid columns={2}>
        <Grid.Column>
          <Dropdown
            onChange={this.handleChange}
            options={options}
            placeholder='Choose an option'
            selection
            value={value}
          />
          <br/>
          <br/>
          <button style={{ color: 'cornflowerblue' }} onClick={this.handleClick}>Start</button>
        </Grid.Column>
        <Grid.Column>
          <Segment secondary>
            <pre>User selects {value} min</pre>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}
