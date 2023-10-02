import React from 'react';
import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './App.scss';

import { AnimatePresence } from 'framer-motion';

import { Header } from './containers/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { Footer } from './containers/Footer';
import { ServicesPage } from './pages/ServicesPage/ServicesPage';
import { ConsultationPage } from './pages/ConsultationPage/ConsultationPage';
import { FormPage } from './pages/FormPage/Form/FormPage';
import { FormRequest } from './pages/FormPage/FormRequest/FormRequest';

export const App = () => (
  <AnimatePresence>
    <HashRouter>
      <div className="app">
        <div className="app__header">
          <Header />
        </div>

        <div className="app__main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/consultation" element={<ConsultationPage />} />
              <Route path="/form" element={<FormPage />} />
              <Route path="/form-request" element={<FormRequest />} />
            </Routes>
        </div>

        <div className="app__footer">
          <Footer />
        </div>
      </div>
    </HashRouter>
  </AnimatePresence>
);
