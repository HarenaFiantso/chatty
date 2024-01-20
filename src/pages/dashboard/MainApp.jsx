import { Box, Stack, useTheme } from "@mui/material";
import Chats from "./Chats";
import Conversation from "./Conversation";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

export default function MainApp() {
  const { sideBar, room_id, chat_type } = useSelector((state) => state.app);
  const theme = useTheme();
  const [searchParams] = useSearchParams();

  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        <Chats />
        <Box
          sx={{
            height: "100%",
            width: sideBar.open ? `calc(100vw - 720px)` : `calc(100vw - 420px)`,
            backgroundColor:
              theme.palette.mode === "light"
                ? "white"
                : theme.palette.background.paper,
            borderBottom:
              searchParams.get("type") === "individual-chat" &&
              searchParams.get("id")
                ? "0px"
                : "6px solid #0162C4",
          }}
        >
          <Conversation />
        </Box>
      </Stack>
    </>
  );
}
