import React, {Component} from 'react';
import './App.css';
import Matchup from './components/Matchup';
import Die from './components/Die';
​
class Main extends Component{
    display(message){
        alert(message);
    }
    
    render(){
        
        return(
            <div className="App">
                <h1>NFL Matchup of the Week</h1>
                <Matchup homeTeam = "Packers" awayTeam = "Bears" />
                
                <Die numberOfSides={10} buttonClick={(message) => this.display(message)}/>
​
                {/* <RegisterForm /> */}
            </div>
        );
    }
}
​
export default Main;

import React, {Component} from 'react';
​
class Die extends Component {
    state = {
        value: null,
        numberOfSides: null
    }
​
    componentDidMount(){
        let result = this.setDieValue();
        this.setState({
            value: result,
            numberOfSides: this.props.numberOfSides
        });
    }
​
    setDieValue(){
        return Math.floor(Math.random() * this.props.numberOfSides) + 1;
    }
​
    getUserInput(){
        return prompt("What is your favorite movie?");
    }
​
    render() {
        return (
            <div>
                <h1>Die number of sides: {this.state.numberOfSides}</h1>
                <h1>Die value: {this.state.value}</h1>
                
                <button onClick={() => this.props.buttonClick(this.getUserInput())}>
                    Click me!
                </button>
            </div>
        );
    }
}
​
export default Die;