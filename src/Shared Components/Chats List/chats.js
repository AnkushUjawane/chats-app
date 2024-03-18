import {
  Box,
  Stack,
  IconButton,
  TextField,
  Typography,
  Avatar,
  Badge,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: -1,
      left: -0.5,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.7)",
      opacity: 0,
    },
  },
}));

const ChatElement = () => {
  return (
    <Box
      sx={{
        width: "80%",
        height: 40,
        border: "1px solid ",
        marginLeft: "5%",
        borderRadius: 1,
      }}
      p={1}
    >
      <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Stack direction={"row"} spacing={2}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar />
          </StyledBadge>
          <Stack >
            <Typography variant="subtitle2">
              Ankush
            </Typography>
            <Typography variant= "caption">
              how are you?
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

const chats = () => {
  return (
    <div>
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          width: 300,
          backgroundColor: "#F8FAFF",
          boxShadow: "0px 0px 5px rgba(0,0,0,0.25)",
        }}
      >
        <Stack padding={"2.5% 5%"} spacing={6}>
          <Typography
            variant="h5"
            fontWeight={"600"}
            fontFamily={"Times, serif"}
          >
            Chats
          </Typography>
        </Stack>
        <form style={{ display: "flex", alignItems: "center" }}>
          <TextField
            id="search-bar"
            className="text"
            label="Search"
            variant="outlined"
            size="small"
            color="primary"
            sx={{
              width: 250,
              margin: "10px 5%",
              backgroundColor: "#FFFFFF",
            }}
          />
          <IconButton
            type="submit"
            aria-label="search"
            style={{ borderRadius: "50%", backgroundColor: "aliceblue" }}
          >
            <SearchIcon style={{ fill: "#709CE6" }} />
          </IconButton>
        </form>
        <br />
        <Stack direction={"column"}>
          <ChatElement />
        </Stack>
      </Box>
    </div>
  );
};

export default chats;
