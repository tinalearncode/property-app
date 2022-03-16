import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './../scss/custom.scss';

import { Container } from 'react-bootstrap';
import { NavBar } from '../components';
import { PropertiesList, PropertiesInsert, PropertiesUpdate } from '../pages';

function App() {
  return (
    <Container>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/properties/list" exact element={<PropertiesList />} />
          <Route path="/properties/create" exact element={<PropertiesInsert />} />
          <Route path="/properties/update/:id" exact element={<PropertiesUpdate />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
