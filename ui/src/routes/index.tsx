import { ComponentType, FC, Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { DEFAULT_PATH } from '../config';
import AuthLayout from '../layouts/auth';
import DashboardLayout from '../layouts/dashboard';

const Loadable =
  <P extends object>(Component: ComponentType<P>): FC<P> =>
  (props: P) => {
    return (
      <Suspense fallback="Loading...">
        <Component {...props} />
      </Suspense>
    );
  };

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

const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const NewPassword = Loadable(lazy(() => import('../pages/auth/NewPassword')));
const Register = Loadable(lazy(() => import('../pages/auth/Register')));
const ResetPassword = Loadable(
  lazy(() => import('../pages/auth/ResetPassword')),
);
const Verify = Loadable(lazy(() => import('../pages/auth/Verify')));
const Call = Loadable(lazy(() => import('../pages/dashboard/Call')));
const Chats = Loadable(lazy(() => import('../pages/dashboard/Chats')));
const Contact = Loadable(lazy(() => import('../pages/dashboard/Contact')));
const Conversation = Loadable(
  lazy(() => import('../pages/dashboard/Conversation')),
);
const GeneralApp = Loadable(
  lazy(() => import('../pages/dashboard/GeneralApp')),
);
const Group = Loadable(lazy(() => import('../pages/dashboard/Group')));
const Profile = Loadable(lazy(() => import('../pages/dashboard/Profile')));
const Settings = Loadable(lazy(() => import('../pages/dashboard/Settings')));
const NotFound = Loadable(lazy(() => import('../pages/NotFound')));
