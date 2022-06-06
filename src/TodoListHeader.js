import { useState } from "react";

const Header = ({list}) => {
    console.log(list);
    let count = 0;
    list.map((e)=>{
        if(e.isActive == false){
            count++;
        }
    })
    const [complete,setComplete] =useState(count)


    return <div className="header">You have {count} tasks left!</div>;
  };
  
  export default Header;
  