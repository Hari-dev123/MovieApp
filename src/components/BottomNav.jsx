import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

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
    }, [value, navigate]);

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
                sx={{ backgroundColor: '#39445a' }}
            >
                <BottomNavigationAction
                    label="Trending"
                    icon={<WhatshotIcon />}
                    sx={{
                        color: 'white',
                        '&.Mui-selected': { color: '#00FF00' }, // Bright neon green
                    }}
                />
                <BottomNavigationAction
                    label="Movies"
                    icon={<LocalMoviesIcon />}
                    sx={{
                        color: 'white',
                        '&.Mui-selected': { color: '#00FF00' },
                    }}
                />
                <BottomNavigationAction
                    label="TV Shows"
                    icon={<LiveTvIcon />}
                    sx={{
                        color: 'white',
                        '&.Mui-selected': { color: '#00FF00' },
                    }}
                />
                <BottomNavigationAction
                    label="Search"
                    icon={<SearchIcon />}
                    sx={{
                        color: 'white',
                        '&.Mui-selected': { color: '#00FF00' },
                    }}
                />
            </BottomNavigation>
        </Box>
    );
}
