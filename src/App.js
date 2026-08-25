
import React, { useState } from 'react';
import Sidebar from './componts/Sidebar';
import Navbar from './componts/Navbar';
import StudentContent from './componts/StudentsModule';
import Footer from './componts/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('Estudiantes');
  const [searchTerm, setSearchTerm] = useState('');
  const [estudiantes, setEstudiantes] = useState([
    { id: 1, nombre: 'Leiner', apellido: 'Calderon', correo: 'leiner@correo.com', celular: '3052342345' },
    { id: 2, nombre: 'Juan Pablo', apellido: 'Goenaga', correo: 'jpgoenaga@correo.com', celular: '3014567656' },
    { id: 3, nombre: 'Yeraldin Natasha', apellido: 'Echeverry', correo: 'yeraldin@correo.com', celular: '3118022525' },
    { id: 4, nombre: 'Luis', apellido: 'Goenaga', correo: 'luis@correo.com', celular: '3158800287' },
    { id: 5, nombre: 'Maria', apellido: 'Perez', correo: 'maria@correo.com', celular: '3125600659' },
  ]);

  const estudiantesFiltrados = estudiantes.filter(e =>
    `${e.nombre} ${e.apellido} ${e.correo}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-slate-100 font-sans antialiased">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <Navbar title="Sistema de Gestión de Cursos" />

          {/* Renderizado condicional según la pestaña activa */}
          {activeTab === 'Estudiantes' && (
            <StudentContent
              searchTerm={searchTerm}
              onSearchChange={(e) => setSearchTerm(e.target.value)}
              estudiantes={estudiantesFiltrados}
              onDeleteStudent={(id) => setEstudiantes(estudiantes.filter(e => e.id !== id))}
              onAddStudent={() => alert('Abrir modal de registro')}
              onEditStudent={(est) => alert(`Editar a ${est.nombre}`)}
            />
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
}