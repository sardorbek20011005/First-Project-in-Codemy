import React from 'react';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Sidebar = () => {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
};

export default Sidebar;




// import React from 'react';

// import HouseIcon from '@mui/icons-material/House';
// import StorageIcon from '@mui/icons-material/Storage';
// import ViewInArIcon from '@mui/icons-material/ViewInAr';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import GroupIcon from '@mui/icons-material/Group';
// import SettingsIcon from '@mui/icons-material/Settings';
// import LogoutIcon from '@mui/icons-material/Logout';

// import { Link } from 'react-router-dom';

// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import FormControl from '@mui/material/FormControl';
// import InputBase from '@mui/material/InputBase';

// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';

// const drawerWidth = { xs: '100%', sm: '100%', md: 240, lg: 240 };

// const BootstrapInput = styled(InputBase)(({ theme }) => ({
//   'label + &': {
//     marginTop: theme.spacing(3),
//   },
//   '& .MuiInputBase-input': {
//     borderRadius: 4,
//     position: 'relative',
//     backgroundColor: theme.palette.background.paper,
//     border: '1px solid #ced4da',
//     fontSize: 16,
//     padding: '10px 26px 10px 12px',
//     transition: theme.transitions.create(['border-color', 'box-shadow']),
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//     '&:focus': {
//       borderRadius: 4,
//       borderColor: '#80bdff',
//       boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
//     },
//   },
// }));

// export default () => {
  
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
//         }}
//       >
//         <Toolbar />
//         <Box sx={{ overflow: 'none', backgroundColor: '#EBEBEB', height: '100%' }}>
//           <Box sx={{ display: 'flex' }}>
//             <FormControl
//               sx={{
//                 width: '20vh',
//                 height: { xs: '5vh', sm: '5vh', md: '5vh', lg: '5vh' },
//                 mt: { xs: '2%', sm: '2%', md: '3.5%', lg: '6%' },
//                 ml: { xs: '5%', sm: '2%', md: '5%', lg: '3%' },
//               }} variant="standard">
//               <BootstrapInput id="demo-customized-textbox" placeholder='Search...' />
//             </FormControl>
//             <Button
//               sx={{
//                 backgroundColor: 'white',
//                 width: '5vh',
//                 height: { xs: '7.7vh', sm: '7.7vh', md: '7.7vh', lg: '6.5vh' },
//                 mt: { xs: '1.5vh', sm: '3vh', md: '1.5vh', lg: '2.3vh' },
//                 ml: { xs: '2%', sm: '1%', md: '1%', lg: '1%' }
//               }} variant="outlined" href="#outlined-buttons">
//               Go
//             </Button>
//           </Box>
//           <List>
//             <Link to="/dashboard" style={{ textDecoration: 'none ', color: 'black' }} >
//               <ListItem sx={{ '&:hover': { backgroundColor: '#BFE8A7' } }} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <HouseIcon />
//                   </ListItemIcon>
//                   <ListItemText primary="Dashboard" />
//                 </ListItemButton>
//               </ListItem>
//             </Link>
//             <Link to="/nested_menu" style={{ textDecoration: 'none ', color: 'black' }} >
//               <ListItem sx={{ '&:hover': { backgroundColor: '#BFE8A7' } }} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <StorageIcon />
//                   </ListItemIcon>
//                   <ListItemText primary="Nested Menu" />
//                 </ListItemButton>
//               </ListItem>
//             </Link>
//             <Link to="/data_visualization" style={{ textDecoration: 'none ', color: 'black' }} >
//               <ListItem sx={{ '&:hover': { backgroundColor: '#BFE8A7' } }} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <ViewInArIcon />
//                   </ListItemIcon>
//                   <ListItemText primary="Data Visualization" />
//                 </ListItemButton>
//               </ListItem>
//             </Link>
//             <Link to='/maps' style={{ textDecoration: 'none ', color: 'black' }}>
//               <ListItem sx={{ '&:hover': { backgroundColor: '#BFE8A7' } }} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <LocationOnIcon />
//                   </ListItemIcon>
//                   <ListItemText primary="Maps" />
//                 </ListItemButton>
//               </ListItem>
//             </Link>
//             <Link to="/manage_users" style={{ textDecoration: 'none ', color: 'black' }} >
//               <ListItem sx={{ '&:hover': { backgroundColor: '#BFE8A7' } }} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <GroupIcon />
//                   </ListItemIcon>
//                   <ListItemText primary="Manage Users" />
//                 </ListItemButton>
//               </ListItem>
//             </Link>
//             <Link to="/preferences" style={{ textDecoration: 'none ', color: 'black' }} >
//               <ListItem sx={{ '&:hover': { backgroundColor: '#BFE8A7' } }} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <SettingsIcon />
//                   </ListItemIcon>
//                   <ListItemText primary="Preferences" />
//                 </ListItemButton>
//               </ListItem>
//             </Link>
//             <Link to="/sign_out" style={{ textDecoration: 'none ', color: 'black' }} >
//               <ListItem sx={{ '&:hover': { backgroundColor: '#BFE8A7' } }} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <LogoutIcon />
//                   </ListItemIcon>
//                   <ListItemText primary="Sign Out" />
//                 </ListItemButton>
//               </ListItem>
//             </Link>
//           </List>
//         </Box>
//       </Drawer >
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Toolbar />
//       </Box>
//     </Box >
//   )
// };