
import React, { useState } from 'react'

function Calculator() {
  const[display, setDisplay]=useState("")
  const handleClick=(value)=>{setDisplay(display+value)}
  const calculateResult=()=>{
    try{
        const result =eval(display);
        setDisplay(result);
    }
    catch(error){
        setDisplay("error")
    }
  }
  const clearDIsplay=()=>setDisplay("")
  return (  
    <div className='calculator'>
        {/* <div className="calculation">
            <span className="calculation-display">{display}</span>
            </div> */}
            <div>
                <span className='main-display'>{display}</span>
            </div>
            <div className="buttons">
              
            <div className="row">
                    <button className="functionBtn" id='clear' onClick={()=>clearDIsplay('c')}>c</button>
                    <button className="functionBtn" onClick={()=>handleClick('()')}>()</button>
                    <button className="functionBtn" onClick={()=>handleClick('%')}>%</button>
                    <button className="functionBtn" onClick={()=>handleClick('/')}>/</button>
                </div>
                <div className="row">
                    <button className="btn-number" onClick={()=>handleClick('7')}>7</button>
                    <button className="btn-number" onClick={()=>handleClick('8')}>8</button>
                    <button className="btn-number" onClick={()=>handleClick('9')}>9</button>
                    <button className="functionBtn" onClick={()=>handleClick('*')}>*</button>
                </div>
                <div className="row">
                    <button className="btn-number" onClick={()=>handleClick('4')}>4</button>
                    <button className="btn-number" onClick={()=>handleClick('5')}>5</button>
                    <button className="btn-number" onClick={()=>handleClick('6')}>6</button>
                    <button className="functionBtn"onClick={()=>handleClick('-')}>-</button>
                </div>
                <div className="row">
                    <button className="btn-number" onClick={()=>handleClick('1')}>1</button>
                    <button className="btn-number" onClick={()=>handleClick('2')}>2</button>
                    <button className="btn-number" onClick={()=>handleClick('3')}>3</button>
                    <button className="functionBtn" onClick={()=>handleClick('+')}>+</button>
                </div>
                <div className="row">
                    <button className="btn-number"  onClick={()=>handleClick('0')}>0</button>
                    <button className="functionBtn"  onClick={()=>handleClick('.')}>.</button>
                    <button className="functionBtn" id="btn-eql"  onClick={()=>calculateResult('')}>=</button>
                    
                </div>
               
               
                </div>
                
            </div>

       
   
 )
}

export default Calculator