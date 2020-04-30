import { v4 as uuid } from "uuid";

export const ADD = "add";
export const DEL = "del";
export const COMPLETE = "complete";
export const UNCOMPLETE = "uncomplete"

export const initState = {
  toDos: [],
  completed: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuid() }]
      };
    case DEL:
      return {
        ...state,
        toDos: state.toDos.filter(toDo => toDo.id !== action.payload),
        completed: state.completed.filter(toDo => toDo.id !== action.payload)
      };
    case COMPLETE:
      const target = state.toDos.find(toDo => toDo.id === action.payload);
      return {
        ...state,
        toDos: state.toDos.filter(toDo => toDo.id !== action.payload),
        completed: [...state.completed, { ...target }]
      };
    case UNCOMPLETE:
      const target2 = state.completed.find(toDo => toDo.id === action.payload);
      return {
        ...state,
        toDos: [...state.toDos, { ...target2 }],
        completed: state.completed.filter(toDo => toDo.id !== action.payload)
      };
    default:
      return;
  }
};

export default reducer;
