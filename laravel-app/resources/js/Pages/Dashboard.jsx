import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Students from './components/Students';
import Admin from './components/Admin';
import Message from './components/Message';
import MessageClass from './components/MessageClass';
import TestComponents from './components/TestComponents';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="flex flex-col h-screen w-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <Routes>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/students" element={<Students />} />
            <Route exact path="/message" element={<Message />} />
            <Route exact path="/content" element={<Content />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;