import React, { useContext } from 'react';
import Context from './context/Context';


function App() {
  const { state, handleChangeName } = useContext(Context);

  return (
    <div>
      <h1>Nome: {state.name}</h1>
      <button onClick={() => handleChangeName()}>
        Muda nome
      </button>
      
    </div>
  );
}

export default App;