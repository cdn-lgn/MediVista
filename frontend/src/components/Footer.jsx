import React from 'react';
import { Box, Typography, Link, Container, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#1a1a1a',
        color: 'white',
        py: 3,
        mt: 4
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Medivista
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, color: '#9e9e9e' }}>
              Your trusted healthcare partner. Quality medicines delivered to your doorstep.
            </Typography>
          </Grid>


          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}> {/* Reduced gap */}
              {['Home', 'About Us', 'Products', 'Contact'].map((text) => (
                <Link
                  key={text}
                  href="#"
                  sx={{
                    color: '#9e9e9e',
                    textDecoration: 'none',
                    '&:hover': { color: '#45a049' }
                  }}
                >
                  {text}
                </Link>
              ))}
            </Box>
          </Grid>


          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}> {/* Reduced gap */}
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <LocationOnIcon sx={{ color: '#45a049' }} />
                <Typography variant="body2" sx={{ color: '#9e9e9e' }}>
                  123 Healthcare Street, Medical City
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <EmailIcon sx={{ color: '#45a049' }} />
                <Typography variant="body2" sx={{ color: '#9e9e9e' }}>
                  info@medivista.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <PhoneIcon sx={{ color: '#45a049' }} />
                <Typography variant="body2" sx={{ color: '#9e9e9e' }}>
                  +1 234 567 8900
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>


        <Typography
          variant="body2"
          sx={{
            mt: 2,
            pt: 1,
            borderTop: '1px solid #333',
            textAlign: 'center',
            color: '#9e9e9e'
          }}
        >
          © {new Date().getFullYear()} Medivista. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
