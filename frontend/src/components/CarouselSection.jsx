import React, { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/material";

const CarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    "/carousel1.jpg",
    "/carousel2.jpg",
    "/carousel3.jpg",
    "/carousel4.jpg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Changed to 5 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <Box
      style={{
        position: "relative",
        display: "flex",
        overflow: "hidden",
        margin: "20px 0",
      }}
      sx={{
        left: { md: "50%" },
        transform: { md: "translateX(-50%)" },
        width: { xs: "100%", sm: "100%", md: "80%" },
        height: { xs: "20dvh", sm: "60dvh" },
        borderRadius: { md: "10px" },
      }}
    >
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt="carousel"
          style={{
            minWidth: "100%",
            // width: "80%",
            height: "100%",
            objectFit: "cover",
            transform: `translateX(${-currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        />
      ))}

      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255,255,255,0.5)",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <ArrowBackIosNewIcon />
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255,255,255,0.5)",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <ArrowForwardIosIcon />
      </button>
    </Box>
  );
};

export default CarouselSection;
