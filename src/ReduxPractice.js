// 2021.07.31 - SAT: 

// Define a Redux Action:

// Define an action here:

const action = {
    type: 'LOGIN'
  }

// Get State from the Redux Store:

const store = Redux.createStore(
    (state = 5) => state
  );
  
  // Change code below this line
  
  const currentState = store.getState();

// 2021.07.30 - FRI: 

// Create a Redux Store:

const reducer = (state = 5) => {
    return state;
  }
  
  // Redux methods are available from a Redux object
  // For example: Redux.createStore()
  // Define the store here:
  
  const store = Redux.createStore(reducer); 