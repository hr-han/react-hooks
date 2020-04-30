import React,{useReducer, useState} from 'react';
import Screen from "./Screen";
import Lang from "./context";
import translations from './translations';
import reducer, { initState, ADD, DEL, COMPLETE, UNCOMPLETE } from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const [newToDo, setNewToDo] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    dispatch({type:ADD, payload:newToDo})
    setNewToDo("");
  };
  const onChange = e => {
    const {
      target: {value}
    } = e
    setNewToDo(value);
  };

  return (
    <div className="App">
      <Lang defaultLang="en" translations={translations}>
        <Screen />
        <h1>Add to do</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Write to do"
            value={newToDo}
            onChange={onChange}
          />
        </form>
        <ul>
          <h2>To Dos</h2>
          {state.toDos.map(toDo => (
            <li key={toDo.id}>
              <span>{toDo.text}</span>
              <span
                role="img"
                aria-label=""
                style={{ cursor: "pointer" }}
                onClick={() => {
                  dispatch({ type: DEL, payload: toDo.id });
                }}
              >
                ✖️
              </span>
              <span
                role="img"
                aria-label=""
                style={{ cursor: "pointer" }}
                onClick={() => {
                  dispatch({ type: COMPLETE, payload: toDo.id });
                }}
              >
                ✔️
              </span>
            </li>
          ))}
        </ul>
        <ul>
          {state.completed.length > 0 && (
            <>
              <h2>Completed</h2>
              {state.completed.map(toDo => (
                <li key={toDo.id}>
                  <span>{toDo.text}</span>
                  <span
                    role="img"
                    aria-label=""
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      dispatch({ type: DEL, payload: toDo.id });
                    }}
                  >
                    ✖️
                  </span>
                  <span
                    role="img"
                    aria-label=""
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      dispatch({ type: UNCOMPLETE, payload: toDo.id });
                    }}
                  >
                    🧨
                  </span>
                </li>
              ))}
            </>
          )}
        </ul>
      </Lang>
    </div>
  );
}

export default App;
