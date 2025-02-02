
import React,{Component} from "react";
import Json from './db1.json';
import ProductList from "./ProductList";

class Products extends Component{
    constructor(){
        super();
        this.state ={
            title:'Products Page',
            products: Json
        }
    }
    render(){
        console.log(this.state.products)
        return(
            <div>
                <h2>{this.state.title}</h2>
                <ProductList prodlist={this.state.products}/>
            </div>
        )
    }
}
export default Products