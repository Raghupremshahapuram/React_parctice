import React from "react";
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Customer from '../Navigation/Customer';
import Products1 from '../Navigation/Prodcuts1';
import NotFound from '../Navigation/NotFound';
import Employeedetails from './Employees/Employeedetails';
import Empoyeeejob from './Employees/Empoyeeejob';
import TempComp from '../Navigation/TempComp';
import Products from './MusicComponents/Products'
import Home from "./Home";

class Routing extends  React.Component{
render(){
    return(
        <Router>
    <div>

        <ul>
            <button type="button">
                <li><Link to="/" > Home </Link></li>
            </button></ul>
            <ul>
            <button type="button">
                <li><Link to="/Employeedetails" > Employeedetails</Link></li>
            </button></ul>
            <ul>
            <button type="button">
                <li><Link to="/Empoyeeejob" > Empoyeeejob </Link></li>
            </button></ul>
            <button type="button">
                <li><Link to="/Customer" > Customer </Link></li>
            </button>
            <button type="button">
                <li><Link to="/Products1" > Products1 </Link></li>
            </button>
            <button type="button">
                <li><Link to="/Products" > Products1 </Link></li>
            </button>
        
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Employeedetails" element={<Employeedetails/>}/>
            <Route exact path="/Empoyeeejob" element={<Empoyeeejob/>}/>
            <Route exact path="/Customer" element={<Customer/>}/>
            <Route exact path="/Customer/:id/:name" element={<Customer/>}/>
            <Route exact path="/Products1" element={<Products1/>}/>
            <Route path="/Products1/:val" element={<TempComp/>}/>
            <Route path="/Products" element={<Products/>}/>

            <Route path="*" element={<NotFound/>}/>

        </Routes>
    </div>
</Router>
    )
}
}
export default Routing;