import {  useParams } from "react-router-dom";

const Comp =()=>{
    const params = useParams();
    return(
        
        <p>{params.val}</p>
    )
}
export default Comp;