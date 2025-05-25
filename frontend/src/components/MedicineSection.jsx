import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, Chip } from "@mui/material";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const MedicineSection = () => {
  const [medicines, setMedicines] = useState([]);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        console.log("API URL is:", API_URL);
        console.log("Fetching medicines from API...");
        const response = await axios.get(`${API_URL}/data`);
        setMedicines(response?.data?.data || []);
        console.log("Medicines fetched successfully:", response?.data);
      } catch (error) {
        console.error("Error fetching medicines:", error);
        setMedicines([]);
      }
    };

    fetchMedicines();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <Box sx={{ mt: 5, px: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}>
        Popular Medicines
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 3,
        }}
      >
        {Array.isArray(medicines) && medicines.map((medicine) => (
          <Card
            key={medicine?.id || Math.random()}
            onClick={() => handleCardClick(medicine?.id)}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              "&:hover": {
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                transform: "translateY(-5px)",
                transition: "all 0.3s ease",
              },
              cursor: 'pointer',
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                sx={{ mb: 1, fontWeight: "500" }}
              >
                {medicine.productName}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 2 }}
              >
                {medicine.company}
              </Typography>
              <Typography
                variant="h6"
                color="primary"
                sx={{ mb: 2 }}
              >
                ₹{medicine.salesPrice}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                <Chip
                  label={medicine.tags}
                  size="small"
                  sx={{
                    backgroundColor: "#45a049",
                    color: "white",
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default MedicineSection;
