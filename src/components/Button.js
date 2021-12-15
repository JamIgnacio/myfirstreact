import React from "react";

class Button extends React.Component{

    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    addCounter = () =>{
        this.setState(
            {
                count : this.state.count + 1
            }
        )
    }

    render(){
        return (
            <div>
                <button onClick = {this.addCounter} class="btn btn-info btn-lg">Need Healing!</button>
                <h4>counts = {this.state.count}</h4>
            </div>
        )
    }
}

export default Button