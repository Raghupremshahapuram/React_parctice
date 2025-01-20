import React from "react";
import './Form1.css'
class Form2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:"a",
            moblenumber:'',
            password:'',
            errormessage:''
        }
    }
    mychangehandler =(event)=>{
        let fieldname = event.target.name;
        let feildvalue= event.target.value;
        let err='';
        if (fieldname === "moblenumber"){
            if (feildvalue !== "" && !Number(feildvalue)){
                err=<strong>Enter correct Number</strong>
            }
        }
        // if (fieldname === "password"){
        //     if (feildvalue){
        //         err=<strong>Enter correct Number</strong>
        //     }
        // }
        this.setState({errormessage: err});
        this.setState({[fieldname]:feildvalue});
    }
   submithandler =(event)=>{
    event.preventDefault();
    alert(this.state.username + ' has registaerd');
   }
    render(){
        return(
            <form onSubmit={this.submithandler}>
            <div>
                <h1> regersation form</h1>
                <p>Name</p>
                <input type="text" name="username" onChange={this.mychangehandler}/>
                
                <p>Mobile number</p>
                <input type="text" name="moblenumber" onChange={this.mychangehandler}/>
                <p>password</p>
                <input type="text" name="password"/>
                
                <input type="submit" value="submit"  />

                {this.state.errormessage}
            </div></form>
        )
    }
}
export default Form2;