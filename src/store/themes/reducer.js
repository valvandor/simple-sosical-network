import { lightTheme, darkTheme } from "../../theme";
import { TOGGLE_THEME } from "./action";


const initialState = {
  themes: [lightTheme, darkTheme],
  whichTheme: 0
}

export const themeReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case TOGGLE_THEME: {
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