import React from "react";
import { CircularProgress, Typography, Box } from "@mui/material";

const RatingCircle = ({ rating }) => {
    return (
        <Box
            position="relative"
            display="inline-flex"
            bgcolor="white" // Always white background
            borderRadius="50%" // Make it circular
            p={0.4} // Add some padding to prevent cut-off
        >
            <CircularProgress
                variant="determinate"
                value={rating * 10}
                size={35}
                thickness={5}
                sx={{
                    color: rating >= 7 ? "green" : rating >= 5 ? "orange" : "red",
                    backgroundColor: "white", // Ensure the background stays white
                    borderRadius: "50%", // Circular shape
                }}
            />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="caption" component="div" color="black" fontWeight="bold">
                    {rating.toFixed(1)}
                </Typography>
            </Box>
        </Box>
    );
};

export default RatingCircle;
