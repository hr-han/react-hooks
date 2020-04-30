import React from 'react';
import Add from './Add';
import List from './List';
import ToDo from './ToDo';
import {useState} from "../context";

function App() {
  const {completed, toDos} = useState();
  return (
    <>
      <Add />
      <List name={"To Dos"}>
        {toDos.map(toDo => (
          <ToDo
            key={toDo.id}
            text={toDo.text}
            id={toDo.id}
            isCompleted={false}
          />
        ))}
      </List>
      <List name={completed.length > 0 ? "Completed" : ""}>
        {completed.map(toDo => (
          <ToDo
            key={toDo.id}
            text={toDo.text}
            id={toDo.id}
            isCompleted={true}
          />
        ))}
      </List>
    </>
  );
}

export default App;
