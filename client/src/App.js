import React from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';

function App() {
 // axios.get('/usuario').then(resultado => {console.log(resultado)});
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá Mundo!</h1>
      </header>
      <p>
        <Link to="/selectbox">Ir para Página SelectBox </Link>
      </p>
      <p>
        <Link to="/listagem/usuario">Ir para Listagem de Usuários </Link>
      </p>
    </div>
  );
}

export default App;
