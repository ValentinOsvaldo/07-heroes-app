import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import DcScreen from '../components/dc/DcScreen';
import HeroScreen from '../components/hero/HeroScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className='container mt-5'>
        <Routes>
          <Route path='marvel' element={<MarvelScreen />} />
          <Route path='dc' element={<DcScreen />} />
          <Route path='search' element={<SearchScreen />} />
          <Route path='hero' element={<HeroScreen />} />
          <Route path='/' element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  );
};

export default DashboardRoutes;
