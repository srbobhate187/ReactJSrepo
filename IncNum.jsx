import React, { useState } from 'react'; 

import Center from "react-center";
import './IncNum.css';

function IncNum(){
    const [count, setCount] = useState(0); 

    function DecNum(){
        setCount(count - 1)

    }
    function IncrNum(){
        setCount(count + 1)
 
    }

    return(
       <Center>
    
       <div>
       <button onClick = {DecNum}> -

       </button>
       <span>{count}</span>
       <button onClick = {IncrNum} className = "Inc"> + </button>
       </div>
       </Center>
    )
}
export default IncNum;