import React from 'react';
import axios from 'axios';
import SelectBox2 from '../../components/SelectBox2';

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
      <>
        <ul>{ this.state.usuario.map(usuario => <li key={usuario.id}>{usuario.nome}</li>)}</ul>
        <SelectBox2 rota="/usuario" chave="id" valor="nome"/>
      </>
    )
  }
}

export default Usuario;