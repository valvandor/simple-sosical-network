export const getThemeReducer = (state) => state.themes;

/**
 * 
 * @param {Object} state - store object
 * @returns {Array} array of objects
 */ 
export const getThemes = (state) => getThemeReducer(state).themes;

/**
 * 
 * @param {Object} state - store object
 * @returns {number} natural number
 */
export const getCurrentTheme = (state) => getThemeReducer(state).whichTheme;