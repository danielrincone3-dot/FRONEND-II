
import SidebarButton from './SidebarButton';

export default function Sidebar({ activeTab, onTabChange }) {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-4 flex flex-col justify-between flex-shrink-0">
      <div>
        <div className="flex items-center gap-3 px-2 py-4 mb-4 border-b border-slate-800">
          <div className="bg-blue-600 p-2 rounded-lg text-white">
            <svg 
  className="w-5 h-5" 
  style={{ width: '20px', height: '20px' }} 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
</svg>
          </div>
          <span className="font-bold text-sm leading-tight">
            Sistema de Gestión<br />de Cursos
          </span>
        </div>

        <nav className="space-y-1">
          
          <SidebarButton label="Estudiantes" isActive={activeTab === 'Estudiantes'} onClick={() => onTabChange('Estudiantes')} />
         
          
        </nav>
      </div>
    </aside>
  );
}