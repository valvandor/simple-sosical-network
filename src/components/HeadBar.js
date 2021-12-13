import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DialpadRoundedIcon from '@mui/icons-material/DialpadRounded';

function HeadBar() {
  return ( 
    <AppBar position="static">
      <Toolbar sx={{justifyContent:"space-between"}}>
        <IconButton 
          to="/chats/" 
          component={Link}
        >
          <DialpadRoundedIcon fontSize="large"/>
        </IconButton>
        <Typography 
          component={Link}
          to="/"
          variant="button"
          sx={{padding: '0 6px', color:"inherit", textDecoration:'none'}}
        >
          Simple&nbsp;Chat
        </Typography>
        <IconButton to="/profile/" component={Link}>
          <AccountBoxIcon fontSize="large"/>
        </IconButton>
      </Toolbar>
    </AppBar>
   );
}

export default HeadBar;