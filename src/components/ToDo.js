import React, { useState } from "react";
import { UNCOMPLETE, DEL, COMPLETE } from "../actions";
import { useDispatch } from "../context";
import Edit from "./Edit";
export default ({text, id, isCompleted}) => {
    const dispatch = useDispatch();
    let [isEdit,setEdit] = useState(false);
    return (
      <li>
        <span>
          {isEdit ? <Edit id={id} text={text} setEdit={setEdit} /> : text}
        </span>
        <span
          role="img"
          aria-label=""
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch({ type: DEL, payload: id });
          }}
        >
          ✖️
        </span>
        <span
          role="img"
          aria-label=""
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch({
              type: isCompleted ? UNCOMPLETE : COMPLETE,
              payload: id
            });
          }}
        >
          {isCompleted ? `🧨` : `✔️`}
        </span>
        {isCompleted ? (
          ``
        ) : (
          <span
            role="img"
            aria-label=""
            style={{ cursor: "pointer" }}
            onClick={() => {
              setEdit(true);
            }}
          >
            ✍️
          </span>
        )}
      </li>
    );
}