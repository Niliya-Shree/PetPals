import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="home" component={Link} to="/">
          <PetsIcon/>
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          PetPals
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/pets">
          Pets
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
        <Button color="inherit" component={Link} to="/register">
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
