import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
  
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  
  const list = [
    {
        title: 'build some WebSite',
        isActive: false
    },
    {
      title: 'do homework',
      isActive: false
  },
  {
      title: 'go shopping',
      isActive: false
  },
  {
      title: 'go swiming',
      isActive: true
  },
]

const[listTodo,setListTodo] = useState(list ?? [])
const addList = (todo) => {
   setListTodo(prev=> [...prev,todo]);
}

const getTitle =(title) =>{
  list.map((e)=>{
    if(e.title === title){
      return  e.isActive = !e.isActive;
    }
   
  })


}
  return (
    <div className="App">
      <div className="container">
        <TodoListHeader
          list={listTodo}
        />
          
            <TodoList 
              list={listTodo}
             getTitle = {getTitle}

            />
          
        
        <Form 
         addList = {addList}
        />
      </div>
      <Footer/>
    </div>
  );
};
