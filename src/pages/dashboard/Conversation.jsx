import { Avatar, Box, Stack, useTheme } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from '../../sections/dashboard/Conversation';

import useResponsive from '../../hooks/useResponsive';

import { SimpleBarStyle } from '../../components/Scrollbar';
import ChatFooter from '../../components/chat/Footer';
import ChatHeader from '../../components/chat/Header';

const Conversation = ({ isMobile, menu }) => {
  const dispatch = useDispatch();

  const { conversations, current_messages } = useSelector((state) => state.conversation.direct_chat);
  const { room_id } = useSelector((state) => state.app);

  return (
    <Box p={isMobile ? 1 : 3}>
      <Stack spacing={3}>
        {current_messages.map((el, idx) => {
          switch (el.type) {
            case 'divider':
              return <Timeline el={el} />;
            case 'msg':
              switch (el.subtype) {
                case 'img':
                  return <MediaMsg el={el} menu={menu} />;
                case 'doc':
                  return <DocMsg el={el} menu={menu} />;
                case 'Link':
                  return <LinkMsg el={el} menu={menu} />;
                case 'reply':
                  return <ReplyMsg el={el} menu={menu} />;
                default:
                  return <TextMsg el={el} menu={menu} />;
              }

            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default function ChatComponents() {
  const isMobile = useResponsive('between', 'md', 'xs', 'sm');
  const theme = useTheme();

  return (
    <Stack height="100%" maxHeight="100vh" width={isMobile ? '100vw' : 'auto'}>
      <ChatHeader />
      
      <Box
        width="100%"
        sx={{
          position: 'relative',
          flexGrow: 1,
          overflow: 'scroll',
          backgroundColor: theme.palette.mode === 'light' ? '#F0F4FA' : theme.palette.background,
          boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
        }}
      >
        <SimpleBarStyle timeout={500} clickOnTrack={false}>
          <Conversation menu={true} isMobile={isMobile} />
        </SimpleBarStyle>
      </Box>

      <ChatFooter />
    </Stack>
  );
}
