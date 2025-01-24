import {  useParams } from "react-router-dom";

const TempComp =()=>{
    const params = useParams();
    return(
        
        <p>{params.val}</p>
    )
}
export default TempComp;