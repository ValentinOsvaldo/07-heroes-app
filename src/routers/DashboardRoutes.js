import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import DcScreen from '../components/dc/DcScreen';
import Hero from '../components/hero/Hero';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='marvel' element={<MarvelScreen />} />
        <Route path='dc' element={<DcScreen />} />
        <Route path='search' element={<SearchScreen />} />
        <Route path='hero' element={<Hero />} />
        <Route path='/' element={<MarvelScreen />} />
      </Routes>
    </>
  );
};

export default DashboardRoutes;
