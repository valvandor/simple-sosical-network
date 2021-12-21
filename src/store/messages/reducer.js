import { ADD_MESSAGE } from "./actions";
import uniqid from 'uniqid';


const initialState = {
  // to be stored like this {[chatId]: [{id, text, author}]}
  messageList: {},
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const currentList = state.messageList[action.chatId] || [];
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [action.chatId]: [
            ...currentList,
            {
              ...action.message,
              id: uniqid.time(action.chatId.split('-')[0]),  // prefix - chat name
            },
          ],
        },
      };
    default:
      return state;
  }
};

export default messagesReducer;