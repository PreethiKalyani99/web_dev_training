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
      <button onClick={addSubject} className="button">ADD</button> 
      </ul>
      <ul> 
      { subjects.map((sub, i)=>{ return(<li key={i}>{sub}</li>)}) }
     </ul>
    </div>
  )
}

function Semester() {
  const semesters = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6','Semester 7', 'Semester 8']
  return (
    <ul>
      {semesters.map((sem,i) => {
        return (
          <li id={i}>
              {sem}
              <li>
              <Subject />  
              </li>
          </li>
        )
      })
      }
    </ul>
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
