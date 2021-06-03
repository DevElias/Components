import React from 'react';
import axios from 'axios';

class Usuario extends React.Component{

  state = {
    usuario: []
  }
  
  componentDidMount() {
    axios.get(`/usuario`)
         .then(res => {
            const usuario = res.data.data;
            this.setState({ usuario });
          })
  }

  render()
  {
    return (
      <ul>{ this.state.usuario.map(usuario => <li>{usuario.nome}</li>)}</ul>
    )
  }
}

export default Usuario;