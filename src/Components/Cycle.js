import React from "react";

class Cycle extends React.Component{
    constructor(props){
        super(props);
        this.state={animal:"Dog"}
    }
    // static getDerivedStateFromProps(props){
    //     return{animal:props.test}
    // }
    shouldComponentUpdate(){
        return true;
    }
    componentDidMount(){
        setTimeout(()=>{this.setState({animal:"Lion"});
    }, 5000)    
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Before ' + prevState.animal)
        return null;
        
    }
    componentDidUpdate(prevProps, prevState){
        console.log('Updated '+ this.state.animal)
        return null;
    }
    
    render(){
        return(
            <div>
                <p>its is a {this.state.animal}</p>
               
            </div>
        )
    }
}
export default Cycle;