import { Router, Route, Routes } from '@solidjs/router'
import HomePage from './pages/HomePage';
import BuilderPage from './pages/BuilderPage';
import CrafterPage from './pages/CrafterPage';
import SimulatorPage from './pages/SimulatorPage';
import CalculatorPage from './pages/CalculatorPage';
import { HopeProvider } from '@hope-ui/solid'
import HopeThemeConfig from './HopeThemeConfig';

function App() {
  return (
    <HopeProvider config={HopeThemeConfig}>
      <Router>
        <Routes>
          <Route path='/builder' element={<BuilderPage />} />
          <Route path='/crafter' element={<CrafterPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/simulator' element={<SimulatorPage />} />
          <Route path='/calculator' element={<CalculatorPage />} />
        </Routes>
      </Router>
    </HopeProvider>
  );
}

export default App;
