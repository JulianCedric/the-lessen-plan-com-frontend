import './App.css';
import React from 'react';
import { Button, Container, Divider, Form } from 'semantic-ui-react';

class About extends React.Component {
    state = {  
        sections: ['1', '2', '3'],
        initial: 0,
        pass: false,
        email: '',
        renderPass: false
    }

    handleClick = e => {
        this.setState({ initial: 1 })
    }

    handleChange = e => {
        // e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state.email)
    }

    handleSubmit = e => {
        let email = this.state.email

        console.log("this.state.email: ", email)
        let arr = []

        console.log(email.includes("@"))

        if (email.includes("@") && email.includes(".com")) {
            this.setState({renderPass: !this.state.renderPass})
        } else {
            alert("Please enter a valid email address.")
        }
    }
        
    render() { 
        return (  
            <div className='about'>
                <Container textAlign='center'>About</Container>
                <br/>
                <br/>
                <p>
                    {!this.state.renderPass
                        ? "Enter Your Email Address:"
                        : "Pass"
                    }
                </p>
                <div className="email">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Input
                                placeholder='email'
                                name='email'
                                value={this.state.email}
                                onChange={this.handleChange}
                            />     
                            <br/>
                            <br/>
                            <Form.Button inverted color='green' content='+' onClick={this.handleClick} />
                        </Form.Group>
                    </Form>
                </div>
                <br/>    
                <br/>    
            </div>
        );
    }
}
 
export default About; 

// 2021.04.08 - THU:

// "The Process:

// 1) Decide what you want to achieve.
// 2) Try different ways of achieving it until you find one that works for you.
// 3) Do more of what works. Do less of what doesn’t.
// 4) Don’t stop doing it until it stops working.
// 5) Repeat." 

// 2021.04.24 - MON: 

// email js 
// SMS messages

//2021.06.10 - THU:

// Add flashcards 

// 2021.06.16 - WED: 

function translatePigLatin(str) {

    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let alphabetArr = alphabet.split('');
    let consonants = alphabetArr.filter(letter => letter !== "a" && letter !== "e" && letter !== "i" && letter !== "o" && letter !== "u") 
    let vowels = ["a","e","i","o","u"];
  
    for (let i=0;i<alphabetArr.length; i++) {
      if (consonants.indexOf(str.charAt(0))) {
  
        let firstCharOfStr = str.charAt(0);
        console.log("firstCharOfStr:", firstCharOfStr);
  
        let slicedStr = str.slice(1);
        console.log("slicedStr:", slicedStr);
        
        var slicedArr = slicedStr.split('');
        console.log("slicedArr:", slicedArr);
        console.log("——————————")
        slicedArr[slicedArr.length] = firstCharOfStr;
        console.log("slicedArr:", slicedArr);
        slicedArr[slicedArr.length] = "ay";
        console.log("slicedArr:", slicedArr);
        return slicedArr.join('');
      }
  
        // console.log("str:", str);
        // console.log("str.charAt(0):", str.charAt(0)); 
        // console.log("vowels:", vowels.indexOf(str.charAt(0)))
  
      if (vowels.indexOf(str.charAt(0)) === 0) {
        return ("str + 'way':", str + 'way');
      } else {
        return ("str + 'way':", str + 'way');
      }
    }
  }
  
  console.log("Result:", translatePigLatin("california"));

  // 2021.06.18 - FRI: 

  function sumPrimes(num) {
    console.log("num:", num);
  
    // find all prime numbers less than or equal to num
    // these prime numbers will be greater than or equal to 1
    // the range of numbers to find are between 1 and num
    // create an array of consecutive integers within this range
    // add these prime numbers together
    // return this num as sum
  
    var primeNums = 1;
    var arr = [];
    var newArr = [2, 3];
    var sum = 0;
  
    for (let i=1; i<=num; i++) {
      arr.push(i);
    }
    // console.log("arr:", arr); 
  
    for (let i=2; i<arr.length; i++) {
      if ((arr[i] % 2 !== 0) && (arr[i] % 3 !== 0)) {
        newArr.push(arr[i]); 
      }
    }
    // console.log("newArr:", newArr);
  
    for (let i=0; i<newArr.length; i++) {
      sum += newArr[i];
      // console.log("sum:", sum)
    }
  
    console.log("sum:", sum);
    return sum;
  
  }
  
  console.log("Result:", sumPrimes(977)); 

// 2021.06.19 - SAT: 

function mutation(arr) {
    console.log("arr:", arr);
  
    var arr1 = arr[0].split('');
    var arr2 = arr[1].split('');
  
    console.log("arr1:", arr1);
    console.log("arr2:", arr2);
  
    var falseCounter = 0;
    var trueCounter = 0;
    var falseArr = [];
    var trueArr = [];
  
    for (let i=0; i<arr1.length; i++) {
      if (arr1.indexOf(arr2[i]) === -1) {
        // console.log("arr1[i]:", arr2[i]);
        trueArr.push(arr2[i]);
        trueCounter += 1;
      } else {
        // console.log("arr1[i]:", arr2[i]);
        falseArr.push(arr2[i]);
        falseCounter += 1;
      }
    }
  
    console.log("falseCounter:", falseCounter);
    console.log("falseArr:", falseArr);
    console.log("trueCounter:", trueCounter);
    console.log("trueArr:", trueArr);
  
  }
  
  // console.log("Result:", mutation(["hello", "hey"]));
  // console.log("Result:", mutation(["ate", "date"]));
  console.log("Result:", mutation(["Tiger", "Zebra"]));