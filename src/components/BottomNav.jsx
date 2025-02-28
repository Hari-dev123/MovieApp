import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom'; // Corrected Import
import { useEffect } from 'react'; // Added useEffect Import

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate(); // Corrected useHistory()

    useEffect(() => {
        if (value === 0) {
            navigate('/');
        } else if (value === 1) {
            navigate('/movies');
        } else if (value === 2) {
            navigate('/series');
        } else {
            navigate('/search');
        }
    }, [value, navigate]); // Corrected Dependency Array

    return (
        <Box
            sx={{
                width: '100%',
                position: 'fixed',
                bottom: 0,
                left: 0,
                boxShadow: '0px -2px 10px rgba(0,0,0,0.1)',
                zIndex: 100,
            }}
        >
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{ backgroundColor: '#39445a',color:'white' }}
            >
                <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} sx={{ color: 'white'  }} />
                <BottomNavigationAction label="Movies" icon={<LocalMoviesIcon />} sx={{ color: 'white' }} />
                <BottomNavigationAction label="Tv Shows" icon={<LiveTvIcon />} sx={{ color: 'white' }} />
                <BottomNavigationAction label="Search" icon={<SearchIcon />} sx={{ color: 'white' }} />
            </BottomNavigation>
        </Box>
    );
}
