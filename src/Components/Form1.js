import React from "react";
import './Form1.css';
class Form1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:"Sha",
            rollno: '',
            errormessage:''
        
        }
    }
    myChangehandler =(event)=>{
        let fieldname=event.target.name;
        let feildvalue = event.target.value;
        let err = '';
        if  (fieldname === "rollno"){
            if(feildvalue !== "" && !Number(feildvalue)){
                err=<strong>rollno must number</strong>
            }
         
        }
        
        this.setState({errormessage: err});
        this.setState({[fieldname]: feildvalue})
    }
    submithandler =(event)=>{
        event.preventDefault();
        console.log(this.state.username)
        console.log(this.state.rollno)
        alert(this.state.username + ' has registaerd');
    }
    render(){
        return(
<div>
    <form onSubmit={this.submithandler}>
        <h1> hello {this.state.username}</h1>
        <p>Name</p>
        <input type="text" name="username" onChange={this.myChangehandler}/>
        <p>roll number</p>
        <input type="text" name="rollno" onChange={this.myChangehandler}/>
        
        <br></br>
        <br></br>
        <input type="submit" value="submit"/>
        <br></br>
        {this.state.errormessage}<br>
      </br>
      {/* {this.state.rollno} */}
        
    </form>
</div>
        );}
}
export default Form1;