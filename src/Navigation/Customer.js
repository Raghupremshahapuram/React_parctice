import React from "react";
import { useParams } from "react-router-dom";

const Customer =()=>{
    const params = useParams();
return(
    <div>
        <p>{params.id}</p>
        <p>{params.name}</p>
    <h1>Customer </h1>
    </div>
)

};
export default Customer;