class TodoApp extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          items: [
            { text: "Learn JavaScript", done: false },
          { text: "Learn React", done: false },
          { text: "Play around in JSFiddle", done: true },
          { text: "Build something awesome", done: true }
        ],
        newItemText: "",
        newItemDone: false
      }
    }
    
    render() {
      console.log("Current state of items:", this.state.newItemText);
      return (
        <div>
          <div>
            <h2>Todos:</h2>
            <ol>
            {this.state.items.map(item => (
              <li key={item.id}>
                <label>
                  <input type="checkbox" disabled readOnly checked={item.done} /> 
                  <span className={item.done ? "done" : ""}>{item.text}</span>
                </label>
              </li>
            ))}
            </ol>
          </div>
          <div id="tasks-form">
            <input 
              type="text"
              placeholder="Enter new task"
            />
            <button>Submit</button>
          </div>
        </div>
      )
    }
  }
  
  ReactDOM.render(<TodoApp />, document.querySelector("#app"))
  