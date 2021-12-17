import ThemeToggle from './components';
import { Box, Typography } from '@mui/material';


export function Profile() {

  return (
    <Box 
      sx={{height: "calc(100vh - 64px - 16px)"}}
      pt={2}
    >
      <Typography
        variant='h4'
        component='h4'
        align='right'
      >
        Profile
      </Typography>

      <ThemeToggle />
    </Box>
  );
}
