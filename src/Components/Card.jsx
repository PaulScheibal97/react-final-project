import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning, faMagicWandSparkles } from '@fortawesome/free-solid-svg-icons';
import { faHandFist } from '@fortawesome/free-solid-svg-icons';
import { faShieldCat } from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import './Card.css'

function Card(props) {

  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");
  const [rarity, setRarity] = useState("");
  const [power, setPower] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [sillyMeter, setSillyMeter] = useState("");


  useEffect(() => {
    setName(props.card.name);
    setRarity(props.card.rarity);
    setPower(props.card.power);
    setSillyMeter(props.card.sillyMeter);
  }, []);

  const saveCard = () => {
    setEditMode(false);
    const updatedCard = {name:name, rarity:rarity, power:power, sillyMeter:sillyMeter, id:props.card.id, image:props.card.image}
    props.updateCard(updatedCard);
  }


  return (
    <div className="card mb-4">
                <img
                  src={props.card.image}
                  alt="yeah"
                  className="card-img-top mx-auto"
                />
               {!editMode && <ul id="cardBody" className="list-group list-group-flush">
                 <li className="list-group-item text-center">
                   {props.card.name}
                 </li>
                 <li id="rareGlow" className="list-group-item text-center">
                   {props.card.rarity} <FontAwesomeIcon icon={faGem} id="rareIcon"  />
                 </li>
                 <li id="powerGlow" className="list-group-item text-center">
                  {props.card.power} <FontAwesomeIcon icon={faHandFist} id="powerIcon"  />
                 </li>
                 <li id="sillyGlow" className="list-group-item text-center">
                  {props.card.sillyMeter} <FontAwesomeIcon icon={faShieldCat} id="sillyIcon"  />
                 </li>
                 <div className="row d-flex justify-content-center text-center mt-1">
                  <button type="button" id="editBtn" className="btn btn-outline-primary m-1" onClick={() => setEditMode(true)}>Edit <FontAwesomeIcon icon={faMagicWandSparkles} id="sparkles" /></button>
                  <button type="button" id="removeBtn" className="btn btn-outline-primary m-1" onClick={() => props.removeCard(props.card)}>Delete <FontAwesomeIcon icon={faWarning} id="warning" /></button>
                 <p id="sillyCopyright"> <FontAwesomeIcon icon={ faCat } /> Silly Cat Trading Card Game Company&copy;</p>
                 </div>
               </ul>
               }
               {editMode && 
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-center editMode">
                    <input type="text" className="form-control" id="editName" value={name} onChange={(evt) => setName(evt.currentTarget.value)} />
                  </li>
                  <li className="list-group-item text-center editMode">
                    <input type="text" className="form-control" id="editRarity" value={rarity} onChange={(evt) => setRarity(evt.currentTarget.value)} />
                  </li>
                  <li className="list-group-item text-center editMode">
                    <input type="email" className="form-control" id="editPower" value={power} onChange={(evt) => setPower(evt.currentTarget.value)} />
                  </li>
                  <li className="list-group-item text-center editMode">
                    <input type="text" className="form-control" id="editSilly" value={sillyMeter} onChange={(evt) => setSillyMeter(evt.currentTarget.value)} />
                  </li>
                  <li className="list-group-item"><button id="btnSave" className="btn btn-outline-primary" onClick={saveCard} >Save</button><span id="saveText">Save your edits!</span></li>
                </ul>
               }
     </div>
  )}

export default Card;