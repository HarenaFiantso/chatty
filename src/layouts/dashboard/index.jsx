import { Stack } from "@mui/material";
import SideNav from "./SideNav";
import useResponsive from "../../hooks/useResponsive";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const isDesktop = useResponsive("up", "md");

  return (
    <Stack direction="row">
      {isDesktop && <SideNav />}
      <Outlet />
    </Stack>
  );
}
