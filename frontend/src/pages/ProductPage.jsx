import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Chip, Container, Grid, Paper, Divider } from '@mui/material';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${API_URL}/data/${id}`);
        setProduct({
          ...response?.data?.data,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          usage: [
            "Take as directed by your physician",
            "Store in a cool, dry place",
            "Keep away from direct sunlight",
            "Keep out of reach of children"
          ],
          sideEffects: [
            "Drowsiness",
            "Dry mouth",
            "Headache"
          ],
          composition: "Active ingredient: Lorem ipsum 500mg"
        });
        console.log("Product fetched successfully:", response?.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Typography>Loading...</Typography>;

  return (
    <div style={{paddingTop:"64px"}}>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4, minHeight: '80vh' }}>
        <Box sx={{ mb: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  height: { xs: '300px', md: '400px' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: '#f8f8f8'
                }}
              >
                <img
                  src="/medicine.jpg"
                  alt={product?.productName}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                height: '100%',
                justifyContent: 'center'
              }}>
                <Typography variant="h4" fontWeight="bold">
                  {product?.productName}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  By {product?.company}
                </Typography>
                <Chip
                  label={product?.tags}
                  sx={{ maxWidth: 'fit-content', bgcolor: '#45a049', color: 'white' }}
                />
                <Typography variant="h4" color="primary" fontWeight="bold">
                  ₹{product?.salesPrice}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box>
                <Typography variant="h6" gutterBottom>Description</Typography>
                <Typography color="text.secondary">
                  {product?.description}
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" gutterBottom>Usage & Directions</Typography>
                <Box component="ul" sx={{ color: 'text.secondary', pl: 2 }}>
                  {product?.usage.map((item, index) => (
                    <li key={index}><Typography>{item}</Typography></li>
                  ))}
                </Box>
              </Box>

              <Box>
                <Typography variant="h6" gutterBottom>Side Effects</Typography>
                <Box component="ul" sx={{ color: 'text.secondary', pl: 2 }}>
                  {product?.sideEffects.map((effect, index) => (
                    <li key={index}><Typography>{effect}</Typography></li>
                  ))}
                </Box>
              </Box>

              <Box>
                <Typography variant="h6" gutterBottom>Composition</Typography>
                <Typography color="text.secondary">
                  {product?.composition}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default ProductPage;
