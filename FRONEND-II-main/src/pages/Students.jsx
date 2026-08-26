import { useState } from 'react';
import StudentsModule from '../componts/StudentsModule';

export default function Students() {
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
    <StudentsModule
      searchTerm={searchTerm}
      onSearchChange={(e) => setSearchTerm(e.target.value)}
      estudiantes={estudiantesFiltrados}
      onDeleteStudent={(id) => setEstudiantes(estudiantes.filter(e => e.id !== id))}
      onAddStudent={() => alert('Abrir modal de registro')}
      onEditStudent={(est) => alert(`Editar a ${est.nombre}`)}
    />
  );
}
