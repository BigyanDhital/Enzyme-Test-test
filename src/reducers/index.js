import types from '../constants/';
import { stat } from 'fs';

export const initialState = {
  todos: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.SUBMIT_TODO:
    console.log("From Reducer ",state);
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
          },
        ],
      };

      case types.DELETE_TODO:
      return{
        ...state,
        todos: [
          ...state.todos.filter(todo => (
            todo.id !== action.id
          )),
        ],
      };
      
    default:
      return state;
  }
};

export default reducer;