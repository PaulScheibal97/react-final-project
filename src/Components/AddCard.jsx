import React, {useState} from 'react';
import {nanoid} from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './AddCard.css';


function AddCard(props) {
  //id, firstName, lastName, image, email
  const [name, setName] = useState("");
  const [rarity, setRarity] = useState("");
  const [power, setPower] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [sillyMeter, setSillyMeter] = useState("");


  const doWork = () => {
    const newCard = {"id":nanoid(), "name":name, "rarity":rarity, "power":power, "sillyMeter":sillyMeter ,"image": URL.createObjectURL(selectedFile)};
    props.addCard(newCard);
  }

  const imageUpdate = (event) => {
    setSelectedFile(event.target.files[0]);
  }


  return (
    <div className="row mt-5 d-flex justify-content-center" id="addCard">
      <h3 id="addHeader" className="d-flex text-center justify-content-center">Add Trading Card</h3>
      <div className="col-md-4">
        <label htmlFor="txtName" className="form-label">Name of Trading Card</label>
        <input type="text" id="txtName" placeholder=" Card Name" className="form-control" onChange={(evt) => setName(evt.currentTarget.value)} value={name} />
      </div>
      <div className="col-md-4 mb-4">
        <label htmlFor="txtRarity" className="form-label">Rarity</label>
        <input type="text" id="txtRarity" placeholder=" Rarity" className="form-control" onChange={(evt) => setRarity(evt.currentTarget.value)} value={rarity} />
      </div>
      <div className="col-md-4">
        <label htmlFor="txtPower" className="form-label">Power Level</label>
        <input type="text" id="txtPower" placeholder=" Power Level" className="form-control" onChange={(evt) => setPower(evt.currentTarget.value)} value={power} />
      </div>
      <div className="col-md-4">
      <label htmlFor="txtSilly" className="form-label">Silly Level</label>
        <input type="text" id="txtSilly" placeholder=" How Silly?" className="form-control" onChange={(evt) => setSillyMeter(evt.currentTarget.value)} value={sillyMeter} />
      </div>
      <div className="col-md-4">
        <label htmlFor="fileUpload" id="fileLabel" className="form-label">Trading Card Image</label>
        <input type="file" name="file" id="fileUpload" onChange={imageUpdate} />
      </div>
      <div className="col-md-4">
        <button type="button" id="btnAdd" className="btn btn-lg btn-outline-primary" onClick={doWork}>Add Card <FontAwesomeIcon icon={faPlusCircle} id="plus" /></button>
      </div>
    </div>
  );


}


export default AddCard;