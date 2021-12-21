import { ADD_CHAT } from "./actions";
import uniqid from 'uniqid';


const initialState = {
  chatList: [],
};

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            id: uniqid.process(`${action.name}-`),
            name: action.name,
          },
        ],
      };
    default:
      return state;
  }
};

export default chatsReducer;