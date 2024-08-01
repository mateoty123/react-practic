import { useState } from "react";
import generateRandomNum from "../../utils/generateRandomNum";
function RandomNumber ({ maxNum }) {
  const [randomNum,setRandomNum] = useState(generateRandomNum(maxNum))
    
    
    const changeRandomNumber = () => {
     return setRandomNum(generateRandomNum(maxNum))
    }
return (
    <div>
        <h1>{randomNum}</h1>
        <button onClick={changeRandomNumber}>Generate random Number</button>   
    </div>
)
}



export default RandomNumber

   