import React, { useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser, faPlus, faSearch, faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import "../css/selectBox2.css";
import "../dist-assets/css/themes/lite-purple.css";
import "../dist-assets/css/plugins/perfect-scrollbar.css";

function SelectBox({rota}) {

    const [data, setData] = useState([]); 
    const [visible, setVisibility] = useState('hide');

    function simpleSearch(rota) {
        setVisibility('show');
        axios.get(rota)
             .then(res => {
                const retorno = res.data.data;
                setData(retorno); 
        })
        setVisibility('hide');       
      }
    
      function clearComponent() {
        setData([]);
      }
    
      function openWindow() {
        alert('Abrir Janela');
    }

    return (
        <div className="col-md-3 form-group mb-3">
            <div className="selectBox">
                <div className={visible}>
                <div id="select-loading" className="loader-bubble loader-bubble-primary m-5"></div>
                </div>
                <select className="form-control" name="options" id="valores" onClick={() => simpleSearch(rota)}>
                    {data.map(item => <option key={item.id} value={item.id}>{item.nome}</option>)}
                </select>
                <div className="group-button">
                    <FontAwesomeIcon icon={faSearch} id="simple-search"  onClick={() => simpleSearch(rota)}/>
                    <FontAwesomeIcon icon={faSearchPlus} id="custom-search" onClick={() => simpleSearch()}/>
                    <FontAwesomeIcon icon={faEraser} id="erase" onClick={() => clearComponent()}/>
                    <FontAwesomeIcon icon={faPlus} id="insert" onClick={() => openWindow()}/>
                </div>
            </div>
        </div> 
    );
  }

export default SelectBox;