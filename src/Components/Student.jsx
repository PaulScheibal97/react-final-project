import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning, faMagicWandSparkles } from '@fortawesome/free-solid-svg-icons';
import './Student.css'

function Student(props) {

  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [sillyMeter, setSillyMeter] = useState("");


  useEffect(() => {
    setFirstName(props.student.firstName);
    setLastName(props.student.lastName);
    setEmail(props.student.email);
    setSillyMeter(props.student.sillyMeter);
  }, []);

  const saveStudent = () => {
    setEditMode(false);
    const updatedStudent = {firstName:firstName, lastName:lastName, email:email, sillyMeter:sillyMeter, id:props.student.id, image:props.student.image}
    props.updateStudent(updatedStudent);
  }


  return (
    <div className="card mb-3">
               <img
                 src={props.student.image}
                 alt="yeah"
                 className="card-img-top mx-auto"
               />
               {!editMode && <ul id="cardBody" className="list-group list-group-flush">
                 <li className="list-group-item text-center">
                   {props.student.firstName}
                 </li>
                 <li className="list-group-item text-center">
                   {props.student.lastName}
                 </li>
                 <li className="list-group-item text-center">
                   {props.student.email}
                 </li>
                 <li className="list-group-item text-center">
                   {props.student.sillyMeter}
                 </li>
                 <div className="row d-flex justify-content-center">
                 <button type="button" id="editBtn" className="btn btn-outline-warning m-1" onClick={() => setEditMode(true)}>Edit <FontAwesomeIcon icon={faMagicWandSparkles}/></button>
                 <button type="button" id="removeBtn" className="btn btn-outline-danger m-1" onClick={() => props.removeStudent(props.student)}>Delete <FontAwesomeIcon icon={faWarning} /></button>
                 </div>
               </ul>
               }
               {editMode && 
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-center">
                    <input type="text" className="form-control" value={firstName} onChange={(evt) => setFirstName(evt.currentTarget.value)} />
                  </li>
                  <li className="list-group-item text-center">
                    <input type="text" className="form-control" value={lastName} onChange={(evt) => setLastName(evt.currentTarget.value)} />
                  </li>
                  <li className="list-group-item text-center">
                    <input type="email" className="form-control" value={email} onChange={(evt) => setEmail(evt.currentTarget.value)} />
                  </li>
                  <li className="list-group-item text-center">
                    <input type="text" className="form-control" value={sillyMeter} onChange={(evt) => setSillyMeter(evt.currentTarget.value)} />
                  </li>
                  <li className="list-group-item"><button id="btnSave" className="btn btn-secondary" onClick={saveStudent} >Save</button></li>
                </ul>
               }
     </div>
  )}

export default Student;