import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom';
import Dashboard from './componant/Dashboard';
import Login from './componant/Login';
export default function Router() {
  return useRoutes([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
    
  ]);
}