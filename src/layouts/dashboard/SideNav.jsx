import { Box, Stack, useTheme } from "@mui/material";

import Logo from "../../assets/Images/chat.png";
import { Nav_Buttons } from "../../data";

export default function SideNav() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100vh",
        width: 100,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F0F4FA"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, .25)",
      }}
    >
      <Stack
        py={3}
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: "100%" }}
      >
        <Stack alignItems="center" spacing={4}>
          <Box
            sx={{
              height: 64,
              width: 64,
              borderRadius: 1.5,
              backgroundColor: theme.palette.primary.main,
            }}
            p={1}
          >
            <img src={Logo} alt="Logo" />
          </Box>

          <Stack
            sx={{ width: "max-content" }}
            direction="column"
            alignItems="center"
            spacing={3}
          >
            Eto izany misy icone kely ohatra
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
