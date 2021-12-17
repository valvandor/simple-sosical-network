import { IconButton } from '@mui/material'
import React, { useCallback } from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentTheme } from '../../../store/themes/selectors';
import { changeTheme } from '../../../store/themes/action';

function ThemeToggle() {
  const currentTheme = useSelector(getCurrentTheme);
  const dispatch = useDispatch();

  const setTheme = useCallback(() => {
    dispatch(changeTheme(currentTheme))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTheme]);

  return (
    <div>
      <IconButton onClick={setTheme} color='inherit' >
        {currentTheme === 1 && <Brightness7Icon/>}
        {currentTheme === 0 && <Brightness4Icon/>}
      </IconButton>
    </div>
  )
}

export default ThemeToggle
