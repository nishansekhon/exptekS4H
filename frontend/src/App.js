import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewHeader from './components/NewHeader';
import NewFooter from './components/NewFooter';
import NewHomePage from './pages/NewHomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NewHeader />
        <main>
          <Routes>
            <Route path="/" element={<NewHomePage />} />
            {/* Additional routes will be added here */}
          </Routes>
        </main>
        <NewFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
