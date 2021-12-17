export const CHANGE_THEME = 'THEME::CHANGE_THEME'

/**
 * 
 * @param {number} newTheme 
 * @returns 
 */
export const changeTheme = (newTheme) => ({
  type: CHANGE_THEME,
  payload: newTheme
});