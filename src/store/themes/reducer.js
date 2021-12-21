import { lightTheme, darkTheme } from "./themes";
import { CHANGE_THEME } from "./action";


const initialState = {
  themes: [lightTheme, darkTheme],
  whichTheme: 1
}

export const themeReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case CHANGE_THEME: {
      if (state.whichTheme === 0) {
        return {
          ...state,
          whichTheme: 1
        };
      }
      else {
        return {
          ...state,
          whichTheme: 0
        };
      }
    }
    default: {
      return state;
    }
  }
}