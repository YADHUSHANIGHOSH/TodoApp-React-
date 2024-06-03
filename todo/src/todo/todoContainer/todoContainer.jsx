import React from "react";
import { useState } from "react";

export default function Todocontainer() {
  const [ toDos, setToDos ] = useState([]); //typeing
  const [ toDo, setToDo ] = useState(""); //listing
  
  

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(event) => setToDo(event.target.value)}
          type="text"
          placeholder="Add item..."
        />
        <i onClick={() => setToDos([...toDos, toDo])} className="fas fa-plus" ></i>
      </div>
        <div className="todos">
          {toDos.map((value, index) => {
            return (
              <div className="todo" key={index}>
                <div className="left">
                  <input type="checkbox" name="" id="" />
                  <p>{value}</p>
                </div>
                <div className="right">
                  <i className="fas fa-times"  onClick={() => setToDos(toDos.filter((_, i) => i !== index))}></i>
                    {/* <button onClick={() => setToDos(toDos.filter((_, i) => i !== index))} >delete</button> */}
                </div>
              </div>
            );
          })}
        </div>
    </div>
  );
}
