import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import Contacts from './Pages/Contact';
import CreateContact from './Contact-components/Create-Contact';
import EditContact from './Contact-components/Edit-Contact';
import ChartsMaps from './Pages/Charts-n-Maps';



const App = ()  => {
  return (
    <>
    <Router>
      <div className="app-container">
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Contacts />} />
            <Route path="/create-contact" element={<CreateContact/>} />
            <Route path="/edit-contact/:id" element={<EditContact/>} />
            <Route path="/charts-maps" element={<ChartsMaps />} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  );
};

export default App;
