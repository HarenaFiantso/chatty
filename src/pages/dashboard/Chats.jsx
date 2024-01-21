import { Box, Button, Divider, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { ArchiveBox, CircleDashed, MagnifyingGlass, Users } from 'phosphor-react';
import { useState } from 'react';

import BottomNav from '../../layouts/dashboard/BottomNav';

import { useSelector } from 'react-redux';

import Friends from '../../sections/dashboard/Friends';

import useResponsive from '../../hooks/useResponsive';

import ChatElement from '../../components/ChatElement';
import { SimpleBarStyle } from '../../components/Scrollbar';
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/search';

export default function Chats() {
  const theme = useTheme();
  const isDesktop = useResponsive('up', 'md');

  const [openDialog, setOpenDialog] = useState(false);
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const { conversations } = useSelector((state) => state.conversation.direct_chat);

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          height: '100%',
          width: isDesktop ? 320 : '100vw',
          backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background,
          boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
        }}
      >
        {!isDesktop && <BottomNav />}
        <Stack p={3} spacing={3} sx={{ maxHeight: '100vh' }}>
          <Stack alignItems="center" justifyContent="space-between" direction="row">
            <Typography variant="h5">Chats</Typography>

            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton
                sx={{ width: 'max-content' }}
                onClick={() => {
                  handleOpenDialog();
                }}
              >
                <Users />
              </IconButton>
              <IconButton sx={{ width: 'max-content' }}>
                <CircleDashed />
              </IconButton>
            </Stack>
          </Stack>

          <Stack sx={{ width: '100%' }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
            </Search>
          </Stack>

          <Stack spacing={1}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <ArchiveBox size={24} />
              <Button variant="text">Archive</Button>
            </Stack>
            <Divider />
          </Stack>

          <Stack sx={{ flexGrow: 1, overflow: 'scroll', height: '100%' }}>
            <SimpleBarStyle timeout={500} clickOnTrack={false}>
              <Stack spacing={2.4}>
                <Typography variant="subtitle2" sx={{ color: '#676667' }}>
                  Pinned
                </Typography>
                {conversations
                  .filter((el) => el.pinned)
                  .map((el, idx) => {
                    return <ChatElement key={idx} {...el} />;
                  })}
                <Divider />
                <Typography variant="subtitle2" sx={{ color: '#676667' }}>
                  All Chats
                </Typography>
                {conversations
                  .filter((el) => !el.pinned)
                  .map((el, idx) => {
                    return <ChatElement {...el} />;
                  })}
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
      </Box>

      {openDialog && <Friends open={openDialog} handleClose={handleCloseDialog} />}
    </>
  );
}
