import { ComponentType, ReactElement, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import { LoginPage } from "../pages/auth/LoginPage";
import { RegisterPage } from "../pages/auth/RegisterPage";
import { ResetPasswordPage } from "../pages/auth/ResetPasswordPage";
import { NewPasswordPage } from "../pages/auth/NewPasswordPage";
import { VerifyPage } from "../pages/auth/VerifyPage";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { MainApp } from "../pages/dashboard/MainApp";
import { Group } from "../pages/dashboard/Group";
import { Settings } from "../pages/dashboard/Settings";
import { Conversation } from "../pages/dashboard/Conversation";
import { Chats } from "../pages/dashboard/Chats";
import { Contact } from "../pages/dashboard/Contact";
import { Profile } from "../pages/dashboard/Profile";
import { Call } from "../pages/dashboard/Call";
import { Page404 } from "../pages/Page404";

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
