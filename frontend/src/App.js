import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import ModernHeader from './components/ModernHeader';
import ModernFooter from './components/ModernFooter';
import ModernHomePage from './pages/ModernHomePage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <ModernHeader />
          <main>
            <Routes>
              <Route path="/" element={<ModernHomePage />} />
              {/* Additional routes will be added here */}
            </Routes>
          </main>
          <ModernFooter />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
