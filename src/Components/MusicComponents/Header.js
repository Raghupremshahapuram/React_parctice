import React,{Component} from "react";

class Header extends Component{
    constructor(){
        super()
        this.state={
            title :'App',
            userinput :'Please serch'
        }
    }

    inputchange=(event)=>{
        this.setState({userinput:event.target.value ? event.target.value : 'plz enter '
        })
    }
    render(){
        return(
            <div>
                <center>
                    <h1>Music store</h1>
        <center>
            <input placeholder="product to search" onChange={this.inputchange}/>
        </center>
        <p>{this.state.userinput}</p>
                </center>
        
            </div>
        );
    }
}
export default Header;