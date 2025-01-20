import React from "react";
import "./Component.css"
class State extends React.Component{
    constructor(){
        super()
        this.state={text:"change of data"}
    }
    changeText(){
        
        this.setState({text:"Data has changed"})
         }
         shouldComponentUpdate(){
            return true;
        }
    render(){
        return(
            <div><h1>{this.state.text}</h1>
             <button onClick={()=> this.changeText()}>Change text</button></div>
        );
    }
}
export default State;