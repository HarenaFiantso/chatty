import { Box, Stack, useTheme } from "@mui/material";

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
      <Stack>Test</Stack>
    </Box>
  );
}
