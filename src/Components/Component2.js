import React from "react";

class Component2 extends React.Component{
    constructor(){
        super();
        this.state={subject : " React course"}
    }
    render(){
        return(
            <h2> welcome to {this.state.subject + " " + this.props.dataFromComponent2} {this.props.dataFromComponent2}</h2>
        );
    }
}
export default Component2;