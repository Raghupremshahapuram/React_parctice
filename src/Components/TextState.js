import React from "react";

class TextState extends React.Component{

    constructor(){
        super();
        this.state={text:"welcome Participants"}

    }
    changeText(){
        
this.setState({text:"people"})
    }
    render(){
        return(
<div>
    <h1>{this.state.text}</h1>
    <button onClick={()=> this.changeText()}>Change text</button>
</div>
        );
    }
}

export default TextState;