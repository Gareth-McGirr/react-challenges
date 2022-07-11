import React from "react";

class EventBinding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0,
        };
    }
    
    incrementCount() {
        this.setState((prevState, prevProps) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    handleClick() {
        this.setState((prevState,prevProps) => {
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
                buttonText: prevState.buttonText === "Enter" ? "Exit" : "Enter",
            }
        })
    }


    render() {
        return (
            <div>
                <h1>{this.state.introduction}, {this.props.greeting}</h1>
                <h2>Count: {this.state.count}</h2>
                <button onClick={() => this.incrementCount()}>increment count</button>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>

        )
    }
}

export default EventBinding;