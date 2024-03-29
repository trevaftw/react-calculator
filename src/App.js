import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    input: '',
    firstValue: '',
    secondValue: '',
    operator: '',
    result: '',
    history: [],
  }

  handleInput = (event) => {
    this.setState({
      ...this.state,
      input: event.target.value
    })
  }

  handleNumber = (event) => {
    if (this.state.input === 'first') {
      let input = this.state.firstValue + event.target.value;
      this.setState({
        ...this.state,
        firstValue: input
      })
    } else if (this.state.input === 'second') {
      let input = this.state.secondValue + event.target.value;
      this.setState({
        ...this.state,
        secondValue: input
      })
    } else {
      alert('Please select input')
    }
  }

  handleOperator = (event) => {
    this.setState({
      ...this.state,
      operator: event.target.value
    })
  }

  handleAnswer = () => {

    let firstNumber = Number(this.state.firstValue);
    let secondNumber = Number(this.state.secondValue);
    let operatorValue = this.state.operator;

    if (firstNumber === '' || secondNumber === '' || operatorValue === '') {
      alert('Please complete all fields')
    } else if (operatorValue === '+') {
      let answer = Number(firstNumber + secondNumber);
      this.setState({
        ...this.state,
        result: answer,
        history: [...this.state.history, (firstNumber + operatorValue + secondNumber + '=' + answer)]
      })
    } else if (operatorValue === '-') {
      let answer = Number(firstNumber - secondNumber);
      this.setState({
        ...this.state,
        result: answer,
        history: [...this.state.history, (firstNumber + operatorValue + secondNumber + '=' + answer)]
      })
    } else if (operatorValue === '*') {
      let answer = Number(firstNumber * secondNumber);
      this.setState({
        ...this.state,
        result: answer,
        history: [...this.state.history, (firstNumber + operatorValue + secondNumber + '=' + answer)]
      })
    } else if (operatorValue === '/') {
      let answer = Number(firstNumber / secondNumber);
      this.setState({
        ...this.state,
        result: answer,
        history: [...this.state.history, (firstNumber + operatorValue + secondNumber + '=' + answer)]
      })
    }
    else {
      alert('error')
    }
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      firstValue: '',
      secondValue: '',
      operator: '',
      result: '',
    })
  }

  render() {

    return (
      <>
        <div className="App">
          <h1>Calculator</h1>
        </div>
        First Number: {this.state.firstValue} <br />
        Operator: {this.state.operator} <br />
        Second Number: {this.state.secondValue}<br />
        Answer: {this.state.result} <br /><br />
        <select onChange={this.handleInput}>
          <option>(select number)</option>
          <option value="first">First Number</option>
          <option value="second">Second Number</option>
        </select>
        <div>
          <button onClick={this.handleNumber} value="1" >1</button>
          <button onClick={this.handleNumber} value="2" >2</button>
          <button onClick={this.handleNumber} value="3" >3</button>
          <button onClick={this.handleOperator} value="+">+</button><br />
          <button onClick={this.handleNumber} value="4" >4</button>
          <button onClick={this.handleNumber} value="5" >5</button>
          <button onClick={this.handleNumber} value="6" >6</button>
          <button onClick={this.handleOperator} value="-">-</button><br />
          <button onClick={this.handleNumber} value="7" >7</button>
          <button onClick={this.handleNumber} value="8" >8</button>
          <button onClick={this.handleNumber} value="9" >9</button>
          <button onClick={this.handleOperator} value="*">*</button><br />
          <button onClick={this.handleClear}>C</button>
          <button onClick={this.handleNumber} value="0" >0</button>
          <button onClick={this.handleAnswer}>=</button>
          <button onClick={this.handleOperator} value="/">/</button>
        </div><br />
        <div>
          History:<br />
          {this.state.history.map(query => {
            return (
              <li>{query}</li>
            )
          })}
        </div>
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
      </>
    );
  }
}

export default App;
