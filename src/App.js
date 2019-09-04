import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    math: '',
    answer: ''
  }

  handleInput = (event) => {
    this.setState ({
      math: [...this.state.math, event.target.value]
    })
    console.log('button clicked:', event.target.value)
  }

  handleAnswer = () => {
    let array = this.state.math
    // var query = '';
    for(let i = 0; i < array.length; i ++){
      if(Number(array[i])){
        console.log('number:', array[i])
      }else{
        console.log('operator:', array[i])
      }
    }
    this.handleClear();
  }

  handleClear = () => {
    this.setState({
      math: '',
    })
  }

  render() {

    return (
      <>
        <div className="App">
          <h1>Calculator</h1>
        </div>
        
        <div>
        <button onClick={this.handleInput} value="1" >1</button>
        <button onClick={this.handleInput} value="2" >2</button>
        <button onClick={this.handleInput} value="3" >3</button>
        <button onClick={this.handleInput} value="+">+</button><br />
        <button onClick={this.handleInput} value="4" >4</button>
        <button onClick={this.handleInput} value="5" >5</button>
        <button onClick={this.handleInput} value="6" >6</button>
        <button onClick={this.handleInput} value="-">-</button><br />
        <button onClick={this.handleInput} value="7" >7</button>
        <button onClick={this.handleInput} value="8" >8</button>
        <button onClick={this.handleInput} value="9" >9</button>
        <button onClick={this.handleInput} value="*">*</button><br />
        <button onClick={this.handleClear}>C</button>
        <button onClick={this.handleInput} value="0" >0</button>
        <button onClick={this.handleAnswer}>=</button>
        <button onClick={this.handleInput} value="/">/</button>
        </div>
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
      </>
    );
  }
}

export default App;
