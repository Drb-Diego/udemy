import { useReducer } from "react";
import Context from "./Context";
import { reducer, globalState } from "./reducer";
import { CHANGE_NAME } from './actions';

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, globalState);
  
  const handleChangeName = () => dispatch(CHANGE_NAME());

  return (
    <Context.Provider value={{ state, handleChangeName }}>
      {children}
    </Context.Provider>
  );
}

export default Provider;
