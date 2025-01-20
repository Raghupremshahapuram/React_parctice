import React from "react";

class Lifecycle extends React.Component{
    constructor(props){
        super(props);
        this.state={instrument:"Guitar"}
    }
    // static getDerivedStateFromProps(props){
    //     return{instrument:props.h1}
    // }

    shouldComponentUpdate(){
        return true;
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({instrument:"Drums"});
        }, 5000);
    }
    render(){
        return(
            <div>
                <p>I know playing {this.state.instrument}</p>
            </div>
        )
    }
}
export default Lifecycle;