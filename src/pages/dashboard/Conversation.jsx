import { Avatar, Box, Stack, useTheme } from "@mui/material";
import ChatHeader from "../../components/chat/Header";
import useResponsive from "../../hooks/useResponsive";
import { SimpleBarStyle } from "../../components/Scrollbar";

export default function ChatComponents() {
  const isMobile = useResponsive("between", "md", "xs", "sm");
  const theme = useTheme();

  return (
    <Stack height="100%" maxHeight="100vh" width={isMobile ? "100vw" : "auto"}>
      <ChatHeader />
      <Box
        width="100%"
        sx={{
          position: "relative",
          flexGrow: 1,
          overflow: "scroll",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <SimpleBarStyle timeout={500} clickOnTrack={false}>

        </SimpleBarStyle>
      </Box>
    </Stack>
  );
}
