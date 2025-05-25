import React from "react";
import { Box, Typography } from "@mui/material";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";

const CategorySection = () => {
  const categories = [
    "General Medicine",
    "Dental Care",
    "Eye Care",
    "Heart Care",
    "Diabetic Care",
    "Mental Health",
    "Children Care",
    "Women Care",
  ];

  return (
    <Box sx={{ mt: 5 }}>
      <Box sx={{ marginBottom: "20px", textAlign: "center" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Categories
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: "20px",
          padding: "20px",
          margin: "20px 0",
        }}
      >
        {categories.map((category, index) => (
          <Box
            key={index}
            sx={{
              height: "130px",
              backgroundColor: "#f5f5f5",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              "&:hover": {
                backgroundColor: "#e0e0e0",
                transform: "translateY(-3px)",
                transition: "all 0.3s ease",
              },
            }}
          >
            <MedicalInformationIcon sx={{ fontSize: 40, color: "#45a049" }} />
            <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: "500" }}>
              {category}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CategorySection;
