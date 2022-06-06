import { useState } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";


const TodoList = ({list,getTitle}) => {
    
    const [title,setTitle] = useState('');
    getTitle(title);
     
  return (
    <div className="todo-list-container">
    {
        list.map((e)=>{

        if(e.isActive == false){
            return (
                <div className="todo-item-container">
                <FaRegCircle className="item-done-button" color="#9a9a9a" 
                    onClick = { ()=>{
                        setTitle(e.title);
                    }}
                />
                <div className="item-title">{e.title}</div>
                </div>
            )
        }else{
            return(
                <div className="todo-item-container done">
                <FaRegCircle className="item-done-button" color="#9a9a9a" 
                   onClick = { ()=>{
                    setTitle(e.title);
                }}
                />
                <div className="item-title">{e.title}</div>
                </div>
            )
        }

        })
    }
    </div>
  );  
};

export default TodoList;
