import './App.css';
import Header from './components/header'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home.jsx'

function App() {
  // TODO: Email, Phone, and Facebook Icons in menu bar
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
