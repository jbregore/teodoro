import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import ArticleIcon from "@mui/icons-material/Article";
import GradeIcon from "@mui/icons-material/Grade";
import InfoIcon from "@mui/icons-material/Info";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import logo from "../assets/images/logo.png";
import { useDispatch } from "react-redux";
import { logout } from "../actions/faculty";

import SettingsModal from "./Modals/SettingsModal/SettingsModal";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Appbar({ active }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const profile = JSON.parse(localStorage.getItem("profile"));
  const [isOpen, setIsOpen] = useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    const isLoggedOut = await dispatch(logout());
    if (isLoggedOut) {
      navigate("/");
    } else {
    }
  };

  const menuItemFaculty = [
    {
      name: "Forms",
      icon: <ArticleIcon />,
      href: "/forms",
    },
    {
      name: "About",
      icon: <InfoIcon />,
      href: "/about",
    },
  ];
  const menuItemAdmin = [
    {
      name: "Master List",
      icon: <PeopleIcon />,
      href: "/masterlist",
    },
    {
      name: "Forms",
      icon: <ArticleIcon />,
      href: "/forms",
    },
    {
      name: "Account",
      icon: <AccountCircleIcon />,
      href: "/account",
    },
    {
      name: "About",
      icon: <InfoIcon />,
      href: "/about",
    },
  ];

  return (
    <>
      {/* appbar */}
      <AppBar
        position="fixed"
        open={open}
        style={{
          // backgroundImage: "linear-gradient(to bottom right, #e67300, #ffcc99)"
          // backgroundColor: "#d98100",
          backgroundColor: "#696868",
        }}
        elevation={0}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Teodoro Evangelista Memorial High School
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <Avatar
              alt="Remy Sharp"
              src={profile?.facultyPhoto ? profile.facultyPhoto : null}
            />
            <SettingsIcon
              style={{ marginLeft: 15, cursor: "pointer" }}
              fontSize="medium"
              onClick={() => setIsOpen(true)}
            />
            <LogoutIcon
              style={{ marginLeft: 15, cursor: "pointer" }}
              fontSize="medium"
              onClick={handleLogout}
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* drawer */}
      <Drawer
        variant="permanent"
        open={open}
        // style={{ backgroundColor: "gray" }}
        PaperProps={{
          sx: {
            // backgroundColor: "#80bfff",
            backgroundColor: "#696868",
            // backgroundImage: "linear-gradient(#fff, rgba(27, 129, 219, 0.485))",
            borderRight: 0,
          },
        }}
      >
        <DrawerHeader>
          <div
            className="section_padding"
            style={{
              width: "100%",
              // backgroundColor: "gray",
              textAlign: "center",
              paddingTop: 15,
              paddingBottom: 10,
              position: "relative",
            }}
          >
            {open ? (
              <>
                <img src={logo} style={{ width: 100, height: 100 }} alt="" />
              </>
            ) : (
              <></>
            )}

            <IconButton
              onClick={handleDrawerClose}
              style={{ position: "absolute", top: 0, right: 0, color: "#fff" }}
            >
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
        </DrawerHeader>
        <Divider  />
        <List>
          {profile?.id > 2 &&
            menuItemFaculty.map((item, index) => (
              <Link
                to={item.href}
                key={index}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <ListItemButton
                  key={index}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: "#fff"
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </Link>
            ))}

          {profile?.id === 2 &&
            menuItemAdmin.map((item, index) => (
              <Link
                to={item.href}
                key={index}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <ListItemButton
                  key={index}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: "#fff"
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </Link>
            ))}
        </List>
      </Drawer>

      {isOpen && <SettingsModal closeModal={setIsOpen} />}
    </>
  );
}
