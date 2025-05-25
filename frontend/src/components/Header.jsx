import {
  alpha,
  AppBar,
  Box,
  IconButton,
  InputBase,
  Toolbar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { AccountCircle, AddShoppingCart } from "@mui/icons-material";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 99,
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <AppBar position="static" sx={{ background: "white", boxShadow: "none" }}>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 1, sm: 1, md: 4 },
          }}
          variant="dense"
        >
          <Box
            component={"img"}
            src="/logo.png"
            alt="Logo"
            sx={{ width: 140 }}
          />
            <SearchBar />

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>

            <IconButton
              sx={{
                mr: { md: 1 },
                display: { xs: "none", sm: "none", md: "flex" },
              }}
            >
              <AccountCircle />
            </IconButton>

            <IconButton>
              <AddShoppingCart />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
