import React, {useState} from 'react';
import './myFirstReact.css';

function Syllabus(){
  const [semester, setSemester] = useState([]);
  const [sem, setSem] = useState("");

  function handleChange(e){
   setSem(e.target.value);
  }

  function handleSemester(){
    setSemester([...semester, sem]);
  }

  
  return (<div>
    <input type="text" placeholder="Semester name" onChange={handleChange}></input>
    <button onClick={handleSemester} className="semester">Add Semester</button>
    {semester.map((sem,i)=>{
      return <li id={i}>{sem}</li>
    })}
    
  </div>)
}
export default Syllabus;