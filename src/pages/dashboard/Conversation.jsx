import { Avatar, Box, Stack, useTheme } from "@mui/material";
import ChatHeader from "../../components/chat/Header";

export default function Conversation({ isMobile, Menu }) {
  return (
    <Stack height="100%" maxHeight="100vh" width="auto">
      <ChatHeader />
    </Stack>
  );
}
