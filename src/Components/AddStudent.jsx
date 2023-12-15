import React, {useState} from 'react';
import {nanoid} from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './AddStudent.css';


function AddStudent(props) {
  //id, firstName, lastName, image, email
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [sillyMeter, setSillyMeter] = useState("");


  const doWork = () => {
    const newStudent = {"id":nanoid(), "firstName":firstName, "lastName":lastName, "email":email, "sillyMeter":sillyMeter ,"image": URL.createObjectURL(selectedFile)};
    props.addStudent(newStudent);
  }

  const imageUpdate = (event) => {
    setSelectedFile(event.target.files[0]);
  }


  return (
    <div className="row mt-5 d-flex justify-content-center" id="addStudent">
      <h3 id="addHeader" className="d-flex text-center justify-content-center">Add Trading Card</h3>
      <div className="col-md-4">
        <label htmlFor="txtFirstName" className="form-label">Name of Trading Card</label>
        <input type="text" id="txtFirstName" placeholder="Card Name" className="form-control" onChange={(evt) => setFirstName(evt.currentTarget.value)} value={firstName} />
      </div>
      <div className="col-md-4 mb-4">
        <label htmlFor="txtLastName" className="form-label">Rarity</label>
        <input type="text" id="txtLastName" placeholder="Rarity" className="form-control" onChange={(evt) => setLastName(evt.currentTarget.value)} value={lastName} />
      </div>
      <div className="col-md-4">
        <label htmlFor="txtEmail" className="form-label">Power Level</label>
        <input type="text" id="txtEmail" placeholder="Power Level" className="form-control" onChange={(evt) => setEmail(evt.currentTarget.value)} value={email} />
      </div>
      <div className="col-md-4">
      <label htmlFor="txtSilly" className="form-label">Silly Level</label>
        <input type="text" id="txtSilly" placeholder="How Silly?" className="form-control" onChange={(evt) => setSillyMeter(evt.currentTarget.value)} value={sillyMeter} />
      </div>
      <div className="col-md-4">
        <label htmlFor="fileUpload" className="form-label">Trading Card Image</label>
        <input type="file" name="file" id="fileUpload" onChange={imageUpdate} />
      </div>
      <div className="col-md-4">
        <button type="button" id="btnAdd" className="btn btn-lg btn-outline-primary" onClick={doWork}>Add Card <FontAwesomeIcon icon={faPlusCircle} /></button>
      </div>
    </div>
  );


}


export default AddStudent;