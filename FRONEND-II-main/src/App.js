
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './componts/Sidebar';
import Navbar from './componts/Navbar';
import Footer from './componts/Footer';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-slate-100 font-sans antialiased">
        <Sidebar />

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <Navbar title="Sistema de Gestión de Cursos" />
            <AppRoutes />
          </div>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
