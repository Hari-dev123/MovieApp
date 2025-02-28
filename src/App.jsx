import React from 'react'
import SimpleBottomNavigation from './components/BottomNav';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Trending from './pages/Trending';
import Movies from './pages/Movies';
import Tvseries from './pages/Tvseries';
import Search from './pages/Search';

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* Fixed Header */}
        <Header className="fixed top-0 left-0 w-full z-50 bg-[#39445a]" />

        <div className="min-h-screen bg-[#39445a] text-white pt-17 pb-14">
          {/* MUI Container with Padding */}
          <Container sx={{ paddingBottom: '26px' ,paddingTop : '10px' }} className="bg-gray-600">
            <Routes>
              <Route path='/' element={<Trending />} exact />
              <Route path='/movies' element={<Movies />} />
              <Route path='/series' element={<Tvseries />} />
              <Route path='/search' element={<Search />} />
            </Routes>
          </Container>
        </div>

        <SimpleBottomNavigation />
      </BrowserRouter>
    </>
  )
}

export default App
