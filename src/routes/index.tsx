import { Navigate, useRoutes } from 'react-router-dom';

import { DEFAULT_PATH } from '../config/constants';

export default function Router() {
  return useRoutes([
    {
      path: '/auth',
      element: <h1>Authentication layout</h1>,
      children: [
        { path: 'login', element: <h1>Login Page</h1> },
        { path: 'register', element: <h1>Register Page</h1> },
        { path: 'reset-password', element: <h1>Reset password Page</h1> },
        { path: 'new-password', element: <h1>New password Page</h1> },
        { path: 'verify', element: <h1>Verify Page</h1> },
      ],
    },
    {
      path: '/',
      element: <h1>Dashboard layout</h1>,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: 'app', element: <h1>Main Application</h1> },
        { path: 'group', element: <h1>Group Page</h1> },
        { path: 'settings', element: <h1>Settings Page</h1> },
        { path: 'conversation', element: <h1>Conversation Page</h1> },
        { path: 'chats', element: <h1>Chats Page</h1> },
        { path: 'profile', element: <h1>Profile Page</h1> },
        { path: 'call', element: <h1>Call Page</h1> },
        { path: '404', element: <h1>404 NOT FOUND</h1> },
        { path: '*', element: <Navigate to={'/404'} replace /> },
      ],
    },
    { path: '*', element: <Navigate to={'/404'} replace /> },
  ]);
}
