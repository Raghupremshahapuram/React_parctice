import React from "react";

class Event1 extends React.Component{
click(){
    alert("you have clicked");
}
    render(){
        return(
            <button onClick={this.click}>click here</button>
        );
    }
}
export default Event1;