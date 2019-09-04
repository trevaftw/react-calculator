import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {

  }

  handleNumber = (event) => {
    console.log(event.target.value)
  }
  render() {

    return (
      <>
        <div className="App">
          <h1>Calculator</h1>
        </div>
        <div>
        <button onClick={this.handleNumber} value="1" >1</button>
        <button onClick={this.handleNumber} value="2" >2</button>
        <button onClick={this.handleNumber} value="3" >3</button><br />
        <button onClick={this.handleNumber} value="4" >4</button>
        <button onClick={this.handleNumber} value="5" >5</button>
        <button onClick={this.handleNumber} value="6" >6</button><br />
        <button onClick={this.handleNumber} value="7" >7</button>
        <button onClick={this.handleNumber} value="8" >8</button>
        <button onClick={this.handleNumber} value="9" >9</button><br />
        <button onClick={this.handleNumber} value="0" >0</button>
        </div>
      </>
    );
  }
}

export default App;
