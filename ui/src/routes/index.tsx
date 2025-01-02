import { Navigate, useRoutes } from 'react-router-dom';
import { DEFAULT_PATH } from '../config';
import AuthLayout from '../layouts/auth';
import DashboardLayout from '../layouts/dashboard';
import Login from '../pages/auth/Login';
import NewPassword from '../pages/auth/NewPassword';
import Register from '../pages/auth/Register';
import ResetPassword from '../pages/auth/ResetPassword';
import Verify from '../pages/auth/Verify';
import Call from '../pages/dashboard/Call';
import Chats from '../pages/dashboard/Chats';
import Contact from '../pages/dashboard/Contact';
import Conversation from '../pages/dashboard/Conversation';
import GeneralApp from '../pages/dashboard/GeneralApp';
import Group from '../pages/dashboard/Group';
import Profile from '../pages/dashboard/Profile';
import Settings from '../pages/dashboard/Settings';
import NotFound from '../pages/NotFound';

export default function Router() {
  return useRoutes([
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'new-password', element: <NewPassword /> },
        { path: 'verify', element: <Verify /> },
      ],
    },
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: 'app', element: <GeneralApp /> },
        { path: 'group', element: <Group /> },
        { path: 'settings', element: <Settings /> },
        { path: 'conversation', element: <Conversation /> },
        { path: 'chats', element: <Chats /> },
        { path: 'contact', element: <Contact /> },
        { path: 'profile', element: <Profile /> },
        { path: 'call', element: <Call /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
