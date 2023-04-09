import React, { useState, useContext } from "react";
import { Box, Typography, IconButton, useTheme } from "@mui/material";
import {
  Sidebar,
  Menu,
  MenuItem,
  MenuItemStyles,
  sidebarClasses,
  useProSidebar,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import ProfilePic from "../../assets/memogy.jpeg";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarTheme = {
    sidebar: {
      backgroundColor: `${colors.primary[400]}`,
    },
    menu: {
      icon: {
        backgroundColor: "transparent",
      },
      hover: {
        backgroundColor: `${colors.primary[400]}`,
        color: "#868dfb",
      },
      active: {
        backgroundColor: `${colors.primary[400]}`,
        color: "#6870fa",
      },
    },
  };

  const menuItemStyles: MenuItemStyles = {
    button: {
      "&:hover": {
        backgroundColor: sideBarTheme.menu.hover.backgroundColor,
        color: sideBarTheme.menu.hover.color,
      },
      padding: "5px 35px 5px 20px",
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
      "&:active": {
        backgroundColor: sideBarTheme.menu.hover.backgroundColor,
        color: sideBarTheme.menu.active.color,
      },
    }),
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Sidebar
          rootStyles={{
            [`.${sidebarClasses.container}`]: {
              backgroundColor: `${colors.primary[400]}`,
            },
          }}
        >
          <Menu menuItemStyles={menuItemStyles}>
            {/* FIRST MENU ITEM - Logo & MenuIcon */}
            <MenuItem
              icon={collapsed ? <MenuOutlinedIcon /> : undefined}
              onClick={() => collapseSidebar()}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginLeft: "25px",
                }}
              >
                <Typography variant="h4" color={colors.grey[100]}>
                  DENNIFY
                </Typography>
                <IconButton onClick={() => collapseSidebar()}>
                  <MenuOutlinedIcon />
                </IconButton>
              </div>
            </MenuItem>
            {/* SECOND MENU ITEM- User Profile */}
            <MenuItem>
              {!collapsed && (
                <div style={{ marginTop: "150px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* image */}
                    <div>
                      <img
                        alt="profile-user"
                        width="100px"
                        height="100px"
                        src={ProfilePic}
                        style={{ cursor: "pointer", borderRadius: "50%" }}
                      />
                    </div>
                    {/* Typography */}
                    <div>
                      <Typography
                        variant="h3"
                        color={colors.grey[100]}
                        fontWeight="bold"
                        sx={{ m: "10px 0 0 0" }}
                        textAlign="center"
                      >
                        KOFI
                      </Typography>
                      <Typography
                        variant="h5"
                        color={colors.greenAccent[500]}
                        textAlign="center"
                      >
                        Store Admin
                      </Typography>
                    </div>
                  </div>
                </div>
              )}
            </MenuItem>
            {/* THIRD MENU ITEM- Dashboard*/}
            <div style={{ marginTop: "80px" }}>
              <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/" />}>
                Dashboard
              </MenuItem>
            </div>
            {/* FOURTH MENU ITEM - Data Heading*/}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "10px 0 5px 20px" }}
            >
              Data
            </Typography>
            <MenuItem
              icon={<PeopleOutlinedIcon />}
              component={<Link to="/team" />}
            >
              Manage Team
            </MenuItem>
            <MenuItem
              icon={<ContactsOutlinedIcon />}
              component={<Link to="/contacts" />}
            >
              Contact Information
            </MenuItem>
            <MenuItem
              icon={<ReceiptOutlinedIcon />}
              component={<Link to="/invoices" />}
            >
              Invoices Balance
            </MenuItem>
            {/* FIFTH MENU ITEM - Data Heading*/}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "10px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <MenuItem
              icon={<PersonOutlinedIcon />}
              component={<Link to="/form" />}
            >
              Profile Form
            </MenuItem>
            <MenuItem
              icon={<CalendarTodayOutlinedIcon />}
              component={<Link to="/calendar" />}
            >
              Calendar
            </MenuItem>
            <MenuItem
              icon={<HelpOutlinedIcon />}
              component={<Link to="/faq" />}
            >
              FAQ Page
            </MenuItem>
            {/* FIFTH MENU ITEM - Data Heading*/}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "10px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <MenuItem
              icon={<BarChartOutlinedIcon />}
              component={<Link to="/bar" />}
            >
              Bar Chart
            </MenuItem>
            <MenuItem
              icon={<PieChartOutlinedIcon />}
              component={<Link to="/pie" />}
            >
              Pie Chart
            </MenuItem>
            <MenuItem
              icon={<ShowChartOutlinedIcon />}
              component={<Link to="/line" />}
            >
              Line Chart
            </MenuItem>
            <MenuItem
              icon={<MapOutlinedIcon />}
              component={<Link to="/geography" />}
            >
              Geography Chart
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </div>
  );
};

export default SideBar;
