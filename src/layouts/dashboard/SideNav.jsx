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
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UpdateTab } from "../../redux/slices/app";

const getPath = (index) => {
  switch (index) {
    case 0:
      return "/app";

    case 1:
      return "/group";

    case 2:
      return "/call";

    case 3:
      return "/settings";

    default:
      break;
  }
};

export default function SideNav() {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const dispatch = useDispatch();
  const { onToggleMode } = useSettings();
  const { tab } = useSelector((state) => state.app);
  const navigate = useNavigate();
  const selectedTab = tab;
  const handleChangeTab = (index) => {
    dispatch(UpdateTab({ tab: index }));
    navigate(getPath(index));
  };

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
              el.index === selectedTab ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                  p={1}
                >
                  <IconButton
                    onClick={() => {
                      handleChangeTab(el.index);
                    }}
                    sx={{ width: "max-content", color: "#FFF" }}
                  >
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
                    handleChangeTab(el.index);
                  }}
                >
                  {el.icon}
                </IconButton>
              )
            )}

            <Divider sx={{ width: 48 }} />
            {Nav_Setting.map((el) => {
              return el.index == selectedTab ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                  p={1}
                >
                  <IconButton
                    onClick={() => {
                      handleChangeTab(el.index);
                    }}
                    sx={{ width: "max-content", color: "#ffffff" }}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    handleChangeTab(el.index);

                    // dispatch(UpdateTab(el.index));
                  }}
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#080707"
                        : theme.palette.text.primary,
                  }}
                >
                  {el.icon}
                </IconButton>
              );
            })}
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
