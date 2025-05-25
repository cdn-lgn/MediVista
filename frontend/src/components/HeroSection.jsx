import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height:{xs:"20dvh",sm:"60dvh"},
      }}
      className="hero-section-intro"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100%",
          textAlign: "center",
          gap: 2,
          px: 2,
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            fontWeight: "bold",
            color: "HighlightText",
          }}
        >
          Your Health, Our Priority
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            onClick={() => navigate('/products')}
            sx={{
              color: "white",
              backgroundColor: "#45a049",
              textTransform: "none",
            }}
          >
            Shop Now
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "white",
              textTransform: "none",
              borderColor: "#45a049",
              borderWidth: "2px",
              "&:hover":{
                boxShadow: "0 0.5px 0.5px #333333",
              }
            }}
          >
            Book Appointment
          </Button>
        </Box>
      </Box>

      <Box component={"img"} src="img1.png" style={{alignSelf:"end"}} sx={{display:{xs:"none",sm:"none",md:"block"}, width:{md:"50%"}}}></Box>
    </Box>
  );
};

export default HeroSection;
