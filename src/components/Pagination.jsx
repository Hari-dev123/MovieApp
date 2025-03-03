import React from "react";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
    palette: {
        mode: "dark", 
        primary: {
            main: "#ffffff", 
        },
    },
});

const CustomPagination = ({ setPage , pages = 10}) => {
    const handleChange = (event, value) => {
        console.log("Selected Page:", value); 
        setPage(value); 
        window.scroll(0,0)
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <div className="flex justify-center mt-4">
                <Pagination count={pages} color="primary" size="small" onChange={handleChange} />
            </div>
        </ThemeProvider>
    );
};

export default CustomPagination;
