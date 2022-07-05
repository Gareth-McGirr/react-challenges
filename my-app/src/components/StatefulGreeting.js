import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
    }

    handleClick() {
        this.setState(
            {
                // use ternary operator to change the state based on the current state
                // If state of introduction is "Hello!" then set to "Goodbye!" else set to "Hello!"
                introduction: this.state.introduction === "Hello!" ? "Goodbye!" : "Hello!",
                // If state of buttonText is "Exit" then set to "Enter" else set to "Exit"
                buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
            }, () => { // callback function passed as second arguement to setState, that will run after state update is complete
                console.log('New state: ', this.state.introduction);
                console.log('New state: ', this.state.buttonText);
            }
        );
    }


    render() {
        return (
            <div>
                <h1>{this.state.introduction}, {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>

        )
    }
}

export default StatefulGreeting;