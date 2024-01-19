import { Box, Stack, Typography, useTheme } from "@mui/material";
import useResponsive from "../../hooks/useResponsive";
import BottomNav from "../../layouts/dashboard/BottomNav";

export default function Chats() {
  const theme = useTheme();
  const isDesktop = useResponsive("up", "md");

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "100%",
          width: isDesktop ? 320 : "100vw",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        {!isDesktop && <BottomNav />}
        <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
          <Stack
            alignItems="center"
            justifyContent="space-between"
            direction="row"
          >
            <Typography variant="h5">Chats</Typography>

            <Stack></Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
