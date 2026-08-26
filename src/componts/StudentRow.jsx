export default function StudentRow({ nombre, apellido, correo, celular, onEdit, onDelete }) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 text-xs">
      <td className="py-3 px-4 text-gray-800">{nombre}</td>
      <td className="py-3 px-4 text-gray-800">{apellido}</td>
      <td className="py-3 px-4 text-gray-600">{correo}</td>
      <td className="py-3 px-4 text-gray-600">{celular}</td>
      <td className="py-3 px-4 space-x-2 font-semibold">
        <button onClick={onEdit} className="text-gray-500 hover:text-blue-600 transition-colors">Editar</button>
        <button onClick={onDelete} className="text-gray-500 hover:text-red-600 transition-colors">Eliminar</button>
      </td>
    </tr>
  );
}