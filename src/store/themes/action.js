export const CHANGE_THEME = 'THEME::CHANGE_THEME'

export const changeTheme = (newTheme) => ({
  type: CHANGE_THEME,
  payload: newTheme
});