import { useEffect, useState } from 'react'
import './App.css'
import { API } from './config/backend';
import { useNavigate } from 'react-router-dom';

function App() {

  const [frase,setFrase] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
     API.get("/")
     .then(response => setFrase(response.data.mensagem))
     .catch(err => console.error(err))
  },[])
  return (
    <>
     <h2>
      {frase}
     </h2>
     <button onClick={() => navigate("/criar")}>Crie sua frase</button>
    </>
  )
}

export default App
