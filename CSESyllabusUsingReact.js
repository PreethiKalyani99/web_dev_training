import React, { useState } from 'react';
import './myFirstReact.css';

function Subject() {
  const [subject, setSubject] = useState('');
  const [subjects, setSubjects] = useState([]);

  const handleChange = (e) => {
    setSubject([e.target.value])
  }
  const addSubject = () => {
    setSubjects([...subjects, subject])
  }
  
  return (
    <div >
      <ul>
      <input type="text" placeholder="Subject Name" onChange={handleChange} value={subject} className = "subject"/>
      <button onClick={addSubject} className="button">ADD SUBJECT</button> 
      </ul>
      <ul> 
      { subjects.map((sub, i)=>{ return(<li key={i}>{sub}</li>)}) }
     </ul>
    </div>
  )
}

function Semester() {

  const [semester, setSemester] = useState('');
  const [ semesters, setSemesters] = useState([]);

  const handleSemester = (e) => {
      setSemester([e.target.value]);
  }

  const addSemester = () =>{
    setSemesters([...semesters,semester]);
  }

  return (
    <div>
      <ul>
        <input type = "text" placeholder = "Semester Name" onChange = {handleSemester} value={semester} className="semester"/>
        <button onClick= {addSemester} className="button">ADD SEMESTER</button>
      </ul>
      <ul>
        {semesters.map((sem,i)=>{return (<li key={i}>{sem}
        <Subject/>
        </li>)})}
      </ul>
    </div>
  )
}

function Syllabus() {
  return (
    <div >
      <Semester />
    </div>
  );
}
export default Syllabus;
