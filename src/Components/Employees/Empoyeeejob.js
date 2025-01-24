import React from "react";
import { useParams } from "react-router-dom";

const Empoyeeejob =() => {
    const params = useParams();
return(
    <div>
        <p>{params.id}</p>
        <p>{params.name}</p>
        <h1>Job</h1>
    </div>
)
}
export default Empoyeeejob;