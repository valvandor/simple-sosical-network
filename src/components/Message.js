import { Paper, Typography, Container, List } from '@mui/material';

function Message(props) {
  return (
    <List
      // component='div'
    >
      <Paper elevation={0}>
        <Container>
          <Typography
            component='span'
            sx={{color: 'primary'}}
          >
            { props.author }
          </Typography>
        </Container>
      </Paper>
      <Paper elevation={5}>
        <Container>
          <Typography
            component='span'
            sx={{color: 'primary'}}
          >
            { props.text }
          </Typography>
        </Container>
      </Paper>
    </List>
  );
}

export default Message;