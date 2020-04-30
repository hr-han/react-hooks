import React, { useState } from "react";
import { EDIT } from "../actions";
import { useDispatch } from "../context";


export default ({ id, text, setEdit }) => {
  console.log("id : ", id, " text : ", text);

  const [newToDo, setNewToDo] = useState(text);
  const dispetch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    dispetch({ type: EDIT, payload: id, text: newToDo });
    setEdit(false);
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
};

