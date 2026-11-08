import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandPage from './pages/landPage';
import LorePage from './pages/lorePower';
import GameStat from './pages/gameStat';
import ShowCase from './pages/showcase';
import Navbar from './components/navbar';
import { ThemeChanger } from './components/themechange';
import { Footer } from './components/footer';

function App() {
  return (
    <section className='bg-[#0d0d0d] min-h-screen'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandPage />} />
          <Route path='/lore' element={<LorePage />} />
          <Route path='/gameplay' element={<GameStat />} />
          <Route path='/showcase' element={<ShowCase />} />
        </Routes>
        <ThemeChanger />
        <Footer />
      </BrowserRouter>
    </section>
  );
}
export default App;
