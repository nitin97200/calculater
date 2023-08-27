import React, { useState } from "react";
// function Calculater(){
//     const [data,setData]=useState(0);
//     return(
//         <div>
//             <h1 className="back">
//             {data}
//             </h1>
//             <button onClick={()=>{setData(data+1)}}><h1>+</h1></button>
//             <button onClick={()=>{setData(data-1)}}><h1>-</h1></button>
//         </div>
//     )
// }

function Calculater() {

    const [result, setResult] = useState("")
    const clickHandle = (event) => {
        setResult(result.concat(event.target.value))
        
    }
    const clearDisplay = () => {
        setResult("")
    }
    const calculate = () => {
        setResult(eval(result).toString()) ///////////eval function k ander kuch bhi use krta ha ye usa calculate kr deta ha ///
    }

    return (
        <div className="calc">
            <input id="answer" type="text" placeholder="0" value={result} />
            <div className="d-wid">
                <input type="button" value="9" className="button" onClick={clickHandle} />
                <input type="button" value="8" className="button" onClick={clickHandle} />
                <input type="button" value="7" className="button" onClick={clickHandle} />
                <input type="button" value="6" className="button" onClick={clickHandle} />
                <input type="button" value="5" className="button" onClick={clickHandle} />
                <input type="button" value="4" className="button" onClick={clickHandle} />
                <input type="button" value="3" className="button" onClick={clickHandle} />
                <input type="button" value="2" className="button" onClick={clickHandle} />
                <input type="button" value="1" className="button" onClick={clickHandle} />
                <input type="button" value="0" className="button" onClick={clickHandle} />
                <input type="button" value="." className="button1" onClick={clickHandle} />
                <input type="button" value="+" className="button1" onClick={clickHandle} />
                <input type="button" value="-" className="button1" onClick={clickHandle} />
                <input type="button" value="*" className="button1" onClick={clickHandle} />
                <input type="button" value="/" className="button1" onClick={clickHandle} />
                <input type="button" value="%" className="button1" onClick={clickHandle} />
                <input type="button" value="clear" className="button2" onClick={clearDisplay} />
                <input type="button" value="=" className="button2" onClick={calculate} />
            </div>

        </div>
    )


}
export default Calculater;