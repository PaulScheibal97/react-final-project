import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {nanoid} from 'nanoid';
import React, {useState, useEffect} from 'react';
import AddStudent from './Components/AddStudent';
import _ from 'lodash';
import Student from './Components/Student';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [allStudents, setAllStudents] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [keywords, setKeywords] = useState("");
  const [sillyMeter, setSillyMeter] = useState("");
  const [selectedFile, setSelectedFile] = useState();



  

  useEffect(() => {

    if(localStorage) {
      const studentsLocalStorage = JSON.parse(localStorage.getItem("students"));
      console.log(studentsLocalStorage);
      if(studentsLocalStorage) {
        saveStudents(studentsLocalStorage);
      } else {
        saveStudents(students);
      }
    }
  }, []);


  const saveStudents = (students) => {
    setAllStudents(students);
    setSearchResults(students);
    if(localStorage) {
      localStorage.setItem("students", JSON.stringify(students));
      console.log("saved to local storage");
    }
  };

  const addStudent = (newStudent) => {
    const updatedStudents = [...allStudents, newStudent];
    saveStudents(updatedStudents);
  };

  const searchStudents = () => {
    let keywordsArray = [];

    if (keywords) {
      keywordsArray = keywords.toLowerCase().split(" ");
    }

    if (sillyMeter) {
      keywordsArray.push(sillyMeter.toString());
    }

    if (keywordsArray.length > 0) {
      const searchResults = allStudents.filter((student) => {
        for (const word of keywordsArray) {
          if (
            student.firstName.toLowerCase().includes(word) ||
            student.lastName.toLowerCase().includes(word) ||
            student.sillyMeter == parseInt(word)
          ) {
            return true;
          }
        }
        return false;
      });
      setSearchResults(searchResults);
    } else {
      setSearchResults(allStudents);
    }
  };

  const removeStudent = (studentToDelete) => {
    console.table(studentToDelete);
    const updatedStudentsArray = allStudents.filter(student => student.id !== studentToDelete.id);
    saveStudents(updatedStudentsArray);
  }

  const updateStudent = (updatedStudent) => {
    console.table(updatedStudent);
    const updatedStudentsArray = allStudents.map((student) =>
    student.id === updatedStudent.id ? { ...student, ...updatedStudent } : student);
    saveStudents(updatedStudentsArray);
  };

  const students = [{
    id: nanoid(),
    firstName: "Bleh Cat",
    lastName: "Rare",
    email: 2000,
    image: "images/bleh.png",
    sillyMeter: 1000
  }, {
    id: nanoid(),
    firstName: "Crazy Cat",
    lastName: "Uncommon",
    email: 1000,
    image: "images/bleh2.jpg",
    sillyMeter: 1000
  }, {
    id: nanoid(),
    firstName: "Sniffin Cat",
    lastName: "Common",
    email: 2000,
    image:  "images/bleh3.jpg",
    sillyMeter: 2000
  }, {
    id: nanoid(),
    firstName: "Weird Cat",
    lastName: "Rare",
    email: 3000,
    image:  "images/bleh4.jpg",
    sillyMeter: 2000
  }, {
    id: nanoid(),
    firstName: "Money Cat",
    lastName: "Ultra Rare",
    email: 3000,
    image:  "images/cat-money.webp",
    sillyMeter: 5000
  }, {
    id: nanoid(),
    firstName: "Senior Cat Dev",
    lastName: "Super Rare",
    email: 3500,
    image:  "images/employeecat1.png",
    sillyMeter: 2500
  }, {
    id: nanoid(),
    firstName: "Junior Cat Dev",
    lastName: "Super Rare",
    email: 2500,
    image:  "images/employeecat2.jpg",
    sillyMeter: 3000
  }, {
    id: nanoid(),
    firstName: "Nerd Cat",
    lastName: "Rare",
    email: 3500,
    image:  "images/employeecat3.png",
    sillyMeter: 3000
  }, {
    id: nanoid(),
    firstName: "Spring Cat",
    lastName: "Common",
    email: 1000,
    image:  "images/spring cat.jpg",
    sillyMeter: 3500
  }, {
    id: nanoid(),
    firstName: "Winter Cat",
    lastName: "Uncommon",
    email: 2500,
    image:  "images/winter cat.jpg",
    sillyMeter: 4000
  }
];




 return (
  <div id="big" className="container-fluid">
   <div className="container">
   <div className="row" id="allStudents">
   <h1 id="bigHead" className="d-flex text-center justify-content-center">Deck Builder App</h1>
      <div className="row d-flex justify-content-center mt-4" id="searchStudents">
       <h3 id="searchHeader" className="d-flex text-center justify-content-center">Search Trading Cards</h3>
       <div className="col-md-4 col-sm-12">
         <label htmlFor="txtKeywords" id="searchLabel">Search by Name or Rarity</label>
         <input
           type="text"
           className="form-control"
           id="searchInput"
           placeholder="Enter Name or Rarity"
           onChange={(evt) => setKeywords(evt.currentTarget.value)}
           value={keywords}
         />
       </div>
       <div className="col-md-4 col-sm-12">
         <label htmlFor="selectForm" id="selectLabel">Search by Silly Level</label>
         <select
           value={sillyMeter}
           onChange={(evt) => setSillyMeter(evt.currentTarget.value)}
           className="form-select"
           id="sillySelect"
         >
           <option value="">Select Silly Level</option>
           {_(allStudents)
             .map((student) => student.sillyMeter)
             .sort()
             .uniq()
             .map((year) => (
               <option key={year} value={year}>
                 {year}
               </option>
             ))
             .value()
             }
         </select>
       </div>
       <div className="col-md-4 col-sm-12">
         <button
           type="button"
           className="btn btn-outline-primary"
           onClick={searchStudents}
           id="searchSelect"
         >
           Search Trading Cards <FontAwesomeIcon icon={faSearch} />
         </button>
       </div>
     </div>
        <h2 id="mainHeader" className="d-flex text-center justify-content-center">Build A Deck!</h2>
        <h3 id="deckHeader" className="d-flex text-center justify-content-center">Your Current Cards</h3>
       {searchResults &&
         searchResults.map((student) => (
           <div id="deck" className="col-md-4 col-sm-12" key={student.id}>
             <Student student={student} removeStudent={removeStudent} updateStudent={updateStudent} />
           </div>
         ))}
         <div className="row d-flex justify-content-center">
          <div className="col-sm-12 d-flex justify-content-center">
            <AddStudent addStudent={addStudent} />
          </div>
         </div>
      </div>
     
     
   </div>
  </div>
 );
}

export default App;
