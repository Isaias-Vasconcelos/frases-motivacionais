import React, { useState } from 'react'
import { API } from './config/backend';
import { useNavigate } from 'react-router-dom';

const Criar = () => {

  const [texto, setTexto] = useState('');
  const [success, setSuccess] = useState('')
  const navigate = useNavigate();

  function CriarMensagem(e) {
    e.preventDefault();

    setTexto('');

    API.post("/", {
      texto: texto
    })
      .then(response => setSuccess(response.data.info))

      navigate("/")
  }
  return (
    <>
      <button onClick={() => navigate("/")}>Voltar</button>

      {success ??
        <h3 style={{color:"green"}}>{success}</h3>
      }
      <h4>Escreva uma frase motivacional!</h4>
      <form onSubmit={CriarMensagem} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <textarea
          value={texto}
          onChange={e => setTexto(e.target.value)}
          type="text" placeholder='Digite aqui...'
          style={{ height: '200px', width: '350px' }}>
        </textarea>
        <button type='submit'>Salvar</button>
      </form>
    </>
  )
}

export default Criar