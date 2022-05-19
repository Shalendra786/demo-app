import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import './Contact.css';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Navbaar = () => {
  const [anchorElNav, setAnchorElNav] =useState(null);
  const [anchorElUser, setAnchorElUser] =useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar style={{backgroundColor:"#7510F7"}} position="sticky" sx={{  paddingTop:0}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
        <Link to='/' style={{textDecoration:'none'}}>
          <Typography
            variant="h5"
            noWrap
            // component="a"
            href="/"
            sx={{
              mr: 2,
            
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color:'white',
              letterSpacing: '.1rem',
              textDecoration: 'none',
            }}
            
          >
           
              SHAILENDRA MISHRA
          </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <MenuItem  onClick={handleCloseNavMenu}>
                <Link to='/about' style={{textDecoration:'none'}}>
                  <Typography 
                // onClick={handleCloseNavMenu}
                sx={{ my: 5, display: 'flex', flexWrap:"noWrap",fontFamily: 'monospace',
                fontWeight: 300,
                letterSpacing: '0rem' }} >About</Typography></Link>
                  <Link to='/contact' style={{textDecoration:'none'}}>
                  <Typography 
                // onClick={handleCloseNavMenu}
                sx={{ my: 5,  display: 'flex',fontFamily: 'monospace',
                fontWeight: 300,
                flexWrap:"noWrap",
                letterSpacing: '0rem' }}>Contact</Typography></Link>
                </MenuItem>
              
            </Menu>
          </Box>
          
          <Typography
            variant="h6"
            noWrap
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '0rem',
              color:"white",
              textDecoration: 'none',
            }}
          >
            Shailendra Mishra
          </Typography>
          <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Link to='/about' style={{textDecoration:'none'}}>
              <Typography
                className='all'
                // onClick={handleCloseNavMenu}
                sx={{ my: 5, color: 'white', display: 'block',fontFamily: 'monospace',
                fontWeight: 600,
                letterSpacing: '.1rem',
                textDecoration: 'inline', }}
                
              > 
                
                About
               
              </Typography> </Link>
              <Link to='/contact' style={{textDecoration:'none'}}>
              <Typography
              className='all'
                
                // onClick={handleCloseNavMenu}
                sx={{ my: 5, color: 'white', display: 'block',fontFamily: 'monospace',
                fontWeight: 600,
                letterSpacing: '.1rem',
                textDecoration: 'inline', }}
              > 
                
                Contact
               
              </Typography> </Link>
              
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <AdbIcon  sx={{ display: { xs: 'none', md: 'flex' }, mr: 3,color:'white' }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                   
                  <Typography component="b" href="/contact" textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbaar;

