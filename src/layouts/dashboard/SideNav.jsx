import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  useTheme,
} from "@mui/material";

import Logo from "../../assets/Images/chat.png";
import AntSwitch from "../../components/AntSwitch";
import useSettings from "../../hooks/useSettings";
import { Nav_Buttons, Nav_Setting } from "../../data";
import { useState } from "react";

export default function SideNav() {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();

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
            {Nav_Buttons.map((el) =>
              el.index === selected ? (
                <Box
                  key={el.index}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton sx={{ width: "max-content", color: "white" }}>
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  key={el.index}
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#080707"
                        : theme.palette.text.primary,
                  }}
                  onClick={() => {
                    setSelected(el.index);
                  }}
                >
                  {el.icon}
                </IconButton>
              )
            )}

            <Divider sx={{ width: 48 }} />
            {selected === 3 ? (
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                {Nav_Setting.map((el) => (
                  <IconButton
                    key={el.index}
                    sx={{ width: "max-content", color: "white" }}
                  >
                    {el.icon}
                  </IconButton>
                ))}
              </Box>
            ) : (
              Nav_Setting.map((el) => (
                <IconButton
                  key={el.index}
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#080707"
                        : theme.palette.text.primary,
                  }}
                  onClick={() => {
                    setSelected(el.index);
                  }}
                >
                  {el.icon}
                </IconButton>
              ))
            )}
          </Stack>
        </Stack>

        <Stack spacing={4}>
          <AntSwitch
            defaultChecked={theme.palette.mode === "light"}
            onChange={onToggleMode}
          />
          <Avatar />
        </Stack>
      </Stack>
    </Box>
  );
}
