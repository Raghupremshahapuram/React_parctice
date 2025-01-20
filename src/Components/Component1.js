import React from "react";
import Component2 from "./Component2";

// import Component from "./Component.css";
var styles={background:'lightgreen'}
class Component1 extends React.Component {
 
    render(){
        return(
            <><div style={styles}>
                <h1> this is the Component1</h1>
                <h2>{2 * 4},

                    {2+2}
                </h2>
                <Component2 dataFromComponent2="Please " />
            </div ></>
        );
    }

};
export default Component1;