import React,{useReducer} from 'react';
import Screen from "./Screen";
import Lang from "./context";
import translations from './translations';

const INCREMENT = "increment";
const DECREMENT = "decrement";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {count:state.count + 1}
    case DECREMENT:
      return {count:state.count - 1}
    default:
      throw new Error();
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0})
  return (
    <div className="App">
      <Lang defaultLang="en" translations={translations}>
        <Screen />
        <h1>{state.count}</h1>
        <button onClick={()=> dispatch({type: INCREMENT})}>ADD</button>
        <button onClick={() => dispatch({ type: DECREMENT })}>REMOVE</button>
      </Lang>
    </div>
  );
}

export default App;
