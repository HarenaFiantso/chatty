import SideNav from './SideNav';
import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';

import useResponsive from '../../hooks/useResponsive';

export default function DashboardLayout() {
  const isDesktop = useResponsive('up', 'md');

  return (
    <Stack direction="row">
      {isDesktop && <SideNav />}
      <Outlet />
    </Stack>
  );
}
