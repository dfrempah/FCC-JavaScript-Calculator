import React from 'react';
import './App.css';




class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        holder: 0,
        display: 0,
        currentValue:'',
        shouldStartNewEntry: true,
        currentOperator: '',
        items: 0
      }
    }

    handleACClick = () => {
      this.setState({
        holder: 0,
        display: 0,
        currentValue: '',
        shouldStartNewEntry: true,
        items: 0
      })
    }

    handleNumberClick = (event) => {
      const keyPressed = event.target.value;
      if(this.state.shouldStartNewEntry){
        this.setState({
          currentValue: keyPressed,
          display: keyPressed,
          shouldStartNewEntry: !this.state.shouldStartNewEntry,
        })
      }else{
        this.setState({
          display: this.state.currentValue + keyPressed,
          currentValue: this.state.currentValue + keyPressed,
        })
      }
    }
   
      handleEqualsClick = () => {
        const string = this.state.currentValue;
        try{
          let answer = eval(string);
          if(Number.isInteger(answer)){
            answer = answer.toFixed(2)
          }
          this.setState({
            display: answer,
            currentValue: answer,
            shouldStartNewEntry: false
          })
        }catch(err){
          this.setState({
            display: "syntax error",
            shouldStartNewEntry: true
          })
        }
      }
    
    

   



  render() {
   
let font = Math.floor((50 - this.state.display.length))

font = `${font}px`

const fontStyles = {  
  fontSize: font,
  
}
  return(
    <div className="App">
        <div className="calculatorScreen" style={fontStyles}>
        
            <p className="calculatorText"> {this.state.display}</p>
        </div>
        <div className="buttonRow topmost">
        <button value="AC" className="topRow" onClick={this.handleACClick}>AC</button>
        <button value="/" className="topRow" onClick={this.handleNumberClick}>÷</button>
        </div>
        <div className="buttonRow">
        <button value="7" onClick={this.handleNumberClick}>7</button>
        <button value="8" onClick={this.handleNumberClick}>8</button>
        <button value="9" onClick={this.handleNumberClick}>9</button>
        <button value="*" onClick={this.handleNumberClick} className="orangeButtons">*</button>
        </div>
        <div className="buttonRow">
        <button value="4" onClick={this.handleNumberClick}>4</button>
        <button value="5" onClick={this.handleNumberClick}>5</button>
        <button value="6" onClick={this.handleNumberClick}>6</button>
        <button value="-" onClick={this.handleNumberClick} className="orangeButtons">-</button>
        </div>
        <div className="buttonRow">
        <button value="1" onClick={this.handleNumberClick}>1</button>
        <button value="2" onClick={this.handleNumberClick}>2</button>
        <button value="3" onClick={this.handleNumberClick}>3</button>
        <button value="+" onClick={this.handleNumberClick} className="orangeButtons">+</button>
        </div>
        <div className="buttonRow">
        <button value="0" onClick={this.handleNumberClick} className="zeroButton">0</button>
        <button value="." onClick={this.handleNumberClick}>.</button>
        <button value="=" onClick={this.handleEqualsClick} className="orangeButtons">=</button>
        </div>
        
    </div>  
  );
}
}

export default App;
