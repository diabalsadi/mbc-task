// React core
import { Route, Routes } from 'react-router-dom';
// Hooks
import useInitData from './hooks/useInitData';
// Pages
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const RouteHandler = () => {
  useInitData();
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default RouteHandler;
