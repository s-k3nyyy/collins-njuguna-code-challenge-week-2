import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BotSpecs from './components/BotSpecs';
import BotsPage from './components/BotsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BotsPage />} />
        <Route path="/bots/:botId" element={<BotSpecs />} />
      </Routes>
    </Router>
  );
}

export default App;
