import React from 'react';
import { Navigate } from 'react-router-dom';
import Users from '../views/Users/List';
import Home from '../containers/Home';
import Dashboard from '../pages/Dashboard';
import Nested_Menu from '../pages/Nested_Menu';
import Data_Visualization from '../pages/Data_Visualization/Dataviz';
import Maps from '../pages/Maps/Maps';
import Manage_Users from '../pages/Manage_Users';
import Preferences from '../pages/Preferences';
import Sign_Out from '../pages/Sign_Out';

export const routes = [
  {
    // element: <Home />,
    children: [
      { index: true, element: <Home /> },
      { path: '/users', element: <Users /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/nested_menu', element: <Nested_Menu /> },
      { path: '/data_visualization', element: <Data_Visualization /> },
      { path: '/maps', element: <Maps /> },
      { path: '/manage_users', element: <Manage_Users /> },
      { path: '/preferences', element: <Preferences /> },
      { path: '/sign_out', element: <Sign_Out /> },

      { path: '*', element: <Navigate to='/' /> },
    ],
  },
];