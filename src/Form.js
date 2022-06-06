import { useEffect, useState } from "react";

const Form = ({addList}) => {
    
    const [job, setJob] = useState('');
  
    const handleChange =(e) => {
        setJob(e.target.value)
    }
    
    const handleSubmit = (e) => {

        e.preventDefault();
        const todo = {
            title: job,
           isActive: false

       }
        addList(todo)
        setJob('');
    }
    

    return (
      <form className="form">
        <input placeholder="Enter task ..." 
            value ={job}
           onChange={handleChange}

        />
        <button onClick={handleSubmit} >Submit</button>
      </form>
    );
  };
  
  export default Form;
  