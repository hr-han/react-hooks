import React, { useState } from "react";
import { ADD } from "../actions";
import { useDispatch } from "../context";


export default () => {
    
  const [newToDo, setNewToDo] = useState("");
  const dispetch = useDispatch();
    
  const onSubmit = e => {
    e.preventDefault();
    dispetch({ type: ADD, payload: newToDo });
    setNewToDo("");
  };
  const onChange = e => {
    const {
      target: { value }
    } = e;
    setNewToDo(value);
  };
    return (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write to do"
          value={newToDo}
          onChange={onChange}
        />
      </form>
    );
}

