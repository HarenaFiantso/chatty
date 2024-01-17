import { ComponentType, ReactElement, Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import { DashboardLayout } from "../layouts/DashboardLayout";

const Loadable = <P extends {}>(
  Component: ComponentType<P>
): ((props: P) => ReactElement) => {
  return (props: P): ReactElement => (
    <Suspense fallback="Loading...">
      <Component {...props} />
    </Suspense>
  );
};

export const Router = () => {
  return useRoutes([
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
        { path: "reset-password", element: <ResetPasswordPage /> },
        { path: "new-password", element: <NewPasswordPage /> },
        { path: "verify", element: <VerifyPage /> },
      ],
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/app" replace />, index: true },
        { path: "app", element: <MainApp /> },
        { path: "group", element: <Group /> },
        { path: "settings", element: <Settings /> },
        { path: "conversation", element: <Conversation /> },
        { path: "chats", element: <Chats /> },
        { path: "contact", element: <Contact /> },
        { path: "profile", element: <Profile /> },
        { path: "call", element: <Call /> },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
};

const MainApp = Loadable(lazy(() => import("../pages/dashboard/MainApp")));
const Conversation = Loadable(
  lazy(() => import("../pages/dashboard/Conversation"))
);
const Chats = Loadable(lazy(() => import("../pages/dashboard/Chats")));
const Group = Loadable(lazy(() => import("../pages/dashboard/Group")));
const Call = Loadable(lazy(() => import("../pages/dashboard/Call")));
const Contact = Loadable(lazy(() => import("../pages/dashboard/Contact")));
const Settings = Loadable(lazy(() => import("../pages/dashboard/Settings")));
const Profile = Loadable(lazy(() => import("../pages/dashboard/Profile")));
const Page404 = Loadable(lazy(() => import("../pages/Page404")));

const LoginPage = Loadable(lazy(() => import("../pages/auth/LoginPage")));
const VerifyPage = Loadable(lazy(() => import("../pages/auth/VerifyPage")));
const RegisterPage = Loadable(lazy(() => import("../pages/auth/RegisterPage")));
const ResetPasswordPage = Loadable(
  lazy(() => import("../pages/auth/ResetPasswordPage"))
);
const NewPasswordPage = Loadable(
  lazy(() => import("../pages/auth/NewPasswordPage"))
);
