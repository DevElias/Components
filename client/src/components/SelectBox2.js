import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEraser, faPlus, faSearch, faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import "../css/selectBox2.css";

function SelectBox() {
    return (
        <div className="selectBox">
            <input type="text"
            />
            <div className="group-button">
                <FontAwesomeIcon icon={faSearch}  onClick={() => setMessage()}/>
                <FontAwesomeIcon icon={faSearchPlus}  onClick={() => setMessage()}/>
                <FontAwesomeIcon icon={faEraser}  onClick={() => setMessage()}/>
                <FontAwesomeIcon icon={faPlus}  onClick={() => openWindow()}/>
            </div>
        </div>
    );
  }

  function setMessage(){
      alert('Teste');
  }

  function openWindow(){
    alert('Abrir Janela');
}

export default SelectBox;