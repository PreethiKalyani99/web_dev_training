import React ,{ useState } from "react";
import './myFirstReact.css';

function Semesters(props){
  const semesterArray =  ['sem 1','sem 2','sem 3','sem 4','sem 5','sem 6'];
  return semesterArray.map((sem,i)=>{
    return (
      <ul>
      <li id={i}> {sem} </li>
      <ul><li> <Subjects subjects ={props.subjects}/> </li></ul>
      </ul>
    );
  });
}

function Subjects(props){
  let subjects = props.subjects;  
  let sub = [];
  for(let i = 0;i < 6; i++){
    sub.push(<li id={i}>{subjects[i]}</li>)
  }
  return sub;
}
//   return subjects.map((sub,i) =>{ 
//   return <li id={i}>{sub}</li>}) 
// }

function Syllabus(){
  const [subjects, setSubjects] = useState([]);
  const [subject, setSubject] = useState(""); 

  function handleChange(e){
    setSubject(e.target.value);
  }

  function handleSubject(e){
    setSubjects([...subjects,subject]);
    e.preventDefault();
  }

  return <div>
    <input type = "text" placeholder = "subject name" onChange = {handleChange} value={subject}></input>
    <button onClick = {handleSubject}>ADD</button>
    <Semesters subjects = {subjects}/>
    </div>   
}
export default Syllabus;























// function Syllabus(){
//   const [subjects, setSubjects] = useState([]);
//   const [subject,setSubject] = useState();
  
  
//   function AddSubject(e){
//       setSubjects([...subjects, subject]);
//       e.preventDefault();
      
//   }

//  function handleSubjectChange(e){
//     setSubject(e.target.value);
//  } 
 
//    const semesterArray = ['sem 1','sem 2','sem 3','sem 4','sem 5','sem 6'];
//    let array = [];

//   //  for(let j = 0; j < semesterArray.length; j++){
//   //    console.log("sdfsf");
//   //      <ul id={j}>{semesterArray[j]}</ul>
//   //      for(let i = 0;i<size;i++){
//   //        console.log('dfklkjljj');
//   //           array.push(<li id={i}>{subjects[i]}</li>)
//   //        }}
       
  
   
   
//     return (<div>
//     <input type = "text" placeholder = "Subject Name" onChange = {handleSubjectChange}></input>
//     <button onClick = {AddSubject}>ADD</button>
//     {/* {array.map((sub,i)=>{
//      const size = 6;
//       if(size === 6){
//         return <li id={i}>{sub}</li>
//       }
//     })} */}
//       {semesterArray.map((sem,i)=>{
        
//         <ul id={i}>{sem}</ul> 
//         console.log("jhasdha")  ;
//         return array.map((sub,j)=>{
        
//           console.log("asjdlask");
//           return <li id={j}>{sub}</li>
        
        
//         })   
//       })}  
//   </div>)
// }





































// function Syllabus(){
//   const [subjects, setSubject] = useState([]);
//   const [semesters, setSemester] = useState([]);

//   function handleClick(e){
//     setSubject([...subjects,"new SUbject"
//       // {
//       //   value: prompt("enter subject")
//       // }
//     ])
//     e.preventDefault();
//   }

//   function Semester(e){
//     setSemester([...semesters, "Sem1"]);
//     e.preventDefault();
//   }
//   return (
//     <div>
//         <button onClick = {Semester} className = "semester">ADD SEMESTER</button>
//         <button onClick = {handleClick} className = "subject">ADD SUBJECT</button>
//         <ul>
//              {semesters.map((semester) => {
//                return <ul>
//                  <li>{semester.value}</li>
//                 <ul>
//                   {subjects.map((subject) => {
//                         return <li>{subject.value}</li>;
//                     })
//                 }
//                 </ul>
//           </ul>
//              })}
//         </ul>

//         {/* <ul>
//           {semesters.map((semester) =>{
//             return <li>{semester.value}</li>
//           })}
//           <ul>{subjects.map((subject) => {
//             return <li>{subject.value}</li>
//           })}
//           </ul>
//         </ul> */}
//     </div>
//   )
// }




// export default Syllabus;


