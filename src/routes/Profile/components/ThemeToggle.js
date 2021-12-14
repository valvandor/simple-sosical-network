import { IconButton } from '@mui/material'
import React, { useCallback } from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useSelector, useDispatch } from 'react-redux';
import { getSelectedTheme } from '../../../store/themes/selectors';
import { toggleTheme } from '../../../store/themes/action';

function ThemeToggle() {
  const selectedTheme = useSelector(getSelectedTheme)
  const dispatch = useDispatch();
  const changeTheme = useCallback(() => {
    dispatch(toggleTheme)
  }, [dispatch]);

  return (
    <div>
      <IconButton onClick={changeTheme} color='inherit' >
        {selectedTheme === 1 && <Brightness7Icon/>}
        {selectedTheme === 0 && <Brightness4Icon/>}
      </IconButton>
    </div>
  )
}

export default ThemeToggle
