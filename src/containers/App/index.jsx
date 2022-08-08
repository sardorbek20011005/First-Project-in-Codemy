import { useRoutes } from "react-router-dom";
import { routes } from "../../routes/routes";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Divider from "@mui/material/Divider";

// import Sidebar from '../../components/Sidebar/index';
// import Pagess from '../../pages/';

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Navbar from "../../components/Navbar";
import Typography from '@mui/material/Typography';


import HouseIcon from '@mui/icons-material/House';
import StorageIcon from '@mui/icons-material/Storage';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const drawerWidth = { xs: '100%', sm: '100%', md: 240, lg: 240 };

export default (props) => {

  const content = useRoutes(routes);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ overflow: "" }}>
      <List>
        <Link to="/dashboard" style={{ textDecoration: 'none ', color: 'black' }} >
          <ListItem sx={{ '&:hover': { backgroundColor: '#BFE8A7' } }} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HouseIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/nested_menu" style={{ textDecoration: 'none ', color: 'black' }} >
          <ListItem sx={{ '&:hover': { backgroundColor: '#BFE8A7' } }} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <StorageIcon />
              </ListItemIcon>
              <ListItemText primary="Nested Menu" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/data_visualization" style={{ textDecoration: 'none ', color: 'black' }} >
          <ListItem sx={{ '&:hover': { backgroundColor: '#BFE8A7' } }} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ViewInArIcon />
              </ListItemIcon>
              <ListItemText primary="Data Visualization" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to='/maps' style={{ textDecoration: 'none ', color: 'black' }}>
          <ListItem sx={{ '&:hover': { backgroundColor: '#BFE8A7' } }} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary="Maps" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/manage_users" style={{ textDecoration: 'none ', color: 'black' }} >
          <ListItem sx={{ '&:hover': { backgroundColor: '#BFE8A7' } }} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Users" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/preferences" style={{ textDecoration: 'none ', color: 'black' }} >
          <ListItem sx={{ '&:hover': { backgroundColor: '#BFE8A7' } }} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Preferences" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/sign_out" style={{ textDecoration: 'none ', color: 'black' }} >
          <ListItem sx={{ '&:hover': { backgroundColor: '#BFE8A7' } }} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider sx={{ width: "85%", ml: "7%", color: "white" }} />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          backgroundColor: "gray",
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <Typography variant='h6' sx={{ color: 'white',width:'100%' }} noWraps component='div'>Dashboard - Admin</Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "flex", md: 'none', lg: 'none' },ml:{sm:'60%'} }}
          >
            <MenuIcon />
          </IconButton>
          <Navbar />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          anchor="top"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "lightgray",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "none", md: 'block', lg: 'block' },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "lightgrey",
              mt: {lg:'4.75%',md:"6.2%"}
            },
          }}
          open
        >

          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width:"80%"
          // width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box sx={{ml:{lg:"19%",md:"25%",sm:"0%",xs:"0%"}}}>
        {content}
        </Box>
      </Box>
    </Box>
  );
};