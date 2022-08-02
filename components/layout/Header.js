import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ThemeToggler from '../ThemeToggler';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function Header(props) {
   const { window, changeTheme, isDarkTheme } = props;
   const [mobileOpen, setMobileOpen] = React.useState(false);

   const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

   // Drawer
   const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
         <Typography variant="h6" sx={{ my: 2 }}>
            LOGO
         </Typography>
         <Divider />
         <List>
            {navItems.map((item) => (
               <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                     <ListItemText primary={item} />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
      </Box>
   );

   const container =
      window !== undefined ? () => window().document.body : undefined;

   return (
      <Box mb={6} sx={{ display: 'flex' }}>
         <AppBar
            component="nav"
            position="sticky"
            sx={{
               backgroundColor: 'headerColor.main',
               color: 'primary.main',
            }}
         >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
               <IconButton
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' } }}
               >
                  <MenuIcon />
               </IconButton>
               {/* Desktop logo */}
               <Typography
                  variant="h6"
                  component="div"
                  sx={{
                     flexGrow: 1,
                     display: { xs: 'none', sm: 'block' },
                  }}
               >
                  LOGO
               </Typography>
               {/* Desktop menu */}
               <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  {navItems.map((item) => (
                     <Button key={item}>{item}</Button>
                  ))}
               </Box>
               {/* Theme toggler */}
               <ThemeToggler
                  changeTheme={changeTheme}
                  isDarkTheme={isDarkTheme}
               />
            </Toolbar>
         </AppBar>
         <Box component="nav">
            <Drawer
               container={container}
               variant="temporary"
               open={mobileOpen}
               onClose={handleDrawerToggle}
               ModalProps={{
                  keepMounted: true,
               }}
               sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': {
                     boxSizing: 'border-box',
                     width: drawerWidth,
                  },
               }}
            >
               {drawer}
            </Drawer>
         </Box>
      </Box>
   );
}
