export const getThemeReducer = (state) => state.themes;

export const getThemes = (state) => getThemeReducer(state).themes;
export const getSelectedTheme = (state) => getThemeReducer(state).whichTheme;