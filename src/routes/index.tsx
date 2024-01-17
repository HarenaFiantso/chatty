import { ComponentType, ReactElement, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import { LoginPage } from "../pages/auth/LoginPage";
import { RegisterPage } from "../pages/auth/RegisterPage";
import { ResetPasswordPage } from "../pages/auth/ResetPasswordPage";
import { NewPasswordPage } from "../pages/auth/NewPasswordPage";
import { VerifyPage } from "../pages/auth/VerifyPage";

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
  ]);
};
