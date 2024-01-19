import { Stack } from "@mui/material";
import Chats from "./Chats";

export default function MainApp() {
  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        <Chats />
      </Stack>
    </>
  );
}
