import React, { useState } from 'react';  
import  pic from './Batman.png'; 
import pic2 from './SuperMan.png';
function Example() { 
  const [change, setChange] = useState(true);       
      return ( 
        <div> 
        
        {change?<img src = {pic} alt = "Batman" width = "250px" />:
        <img src = {pic2} alt = "Superman" width = "250px" /> }
        <button onClick = {() => setChange(!change)}> 
        Change logo
        </button>
        </div> 
         
        ); 
  } 
  
export default Example; 