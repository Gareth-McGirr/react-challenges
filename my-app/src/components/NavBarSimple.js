import React from "react";
import css from "./css/NavBarSimple.module.css";
class NavBarSimple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messageText: "Hello",
            buttonText: "log in",
            name: "Guest"
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            return {
                messageText: prevState.messageText === "Hello" ? "Welcome back" : "Hello",
                buttonText: prevState.buttonText === "log in" ? "log out" : "log in",
                name: prevState.name === "Guest" ? "Gareth" : "Guest",
                
            }
        })
    }

    render() {
        return (
            <div className= {css.NavBar}>
                <h1>My Gallery</h1>
                <span>{this.state.messageText}, {this.state.name}!</span>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default NavBarSimple;