handleSaveClick = e => {
    e.preventDefault() 
    fetch("http://localhost:3001/api/v1/habits", {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            id: this.state.id,
            name: this.state.name,
            description: this.state.description,
            quote: this.state.quote,
            dateCreated: date,
            column: this.state.column,
            counter: this.state.counter,
            percentage: this.state.percentage,
            dailyWinConfirmation: this.state.dailyWinConfirmation
        })})
        .then(r => r.json())
        .then(newHabit => {
            this.props.handleNewHabit(newHabit)
            this.setState({
                id: '',
                name: '',
                description: '',
                quote: '',
                dateCreated: date,
                column: '',
                counter: 0,
                percentage: 0,
                dailyWinConfirmation: false
            })
        })
}

handleStickifyClick = e => {
    e.preventDefault() 
    fetch("http://localhost:3001/api/v1/habits", {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            id: this.state.id,
            name: this.state.name,
            description: this.state.description,
            quote: this.state.quote,
            dateCreated: date,
            column: this.state.column,
            counter: 1,
            percentage: this.state.percentage,
            dailyWinConfirmation: this.state.dailyWinConfirmation
        })})
        .then(r => r.json())
        .then(newHabit => {
            this.props.handleNewHabit(newHabit)
            this.setState({
                id: '',
                name: '',
                description: '',
                quote: '',
                dateCreated: date,
                column: '',
                counter: 0,
                percentage: 0,
                dailyWinConfirmation: false
            })
        })
}

handleDelete = id => {
    console.log("DELETE ---", "ID of habit object being deleted:", id)
    fetch(`http://localhost:3001/api/v1/habits/${id}`, { 
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
      .then(() => {
        let newArr = this.state.habits.filter(habit => habit.id !== id)
        this.setState({habits: newArr})
      })
    }

    editHabit = ( id, data ) => {
        console.log('EVENT NOTIFICATION: USER CLICKED [ EDIT ] BUTTON.', 'ID: ', id)
        console.log('EVENT NOTIFICATION: USER CLICKED [ EDIT ] BUTTON.', 'DATA: ', data)
      
        let copiedHabitsArray = [...this.state.habits]
        let copiedHabitObject = copiedHabitsArray.find(habit => habit.id === id)

        console.log('copiedHabitsArray: ', copiedHabitsArray)
        console.log('copiedHabitObject: ', copiedHabitObject)

        // let elem = this.state.habits.find(habit => habit.id === id)
        // let description = elem.description

        fetch(`http://localhost:3001/api/v1/habits/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                "description": data
            }) 
        })
        .then(description => {
            this.setState(prevState => ({
                habits: prevState.habits.map(eachItem => {
                    if( eachItem === copiedHabitObject ){
                        return { ...eachItem, description: data }
                    } else {
                        return eachItem
                    }
                })
            }))
        })
    }

    handleSubmitSignUp = e => {
        e.preventDefault()
        fetch('http://localhost:3001/api/v1/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"   
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.username,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword
            })
        })
        .then(r => r.json())
        .then(data => {
            if (!data.error) {
                this.props.setLogin(data)
            }
        })
    }

//

// 1. Two Sum

nums = [2, 7, 11, 15]