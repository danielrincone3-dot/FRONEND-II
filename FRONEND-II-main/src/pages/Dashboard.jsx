import StatCard from '../componts/StatCard';
import Title from '../componts/Title';

export default function Dashboard() {
  return (
    <main className="p-8 max-w-6xl mx-auto w-full">
      <Title text="Dashboard" subtitle="Bienvenido al Sistema de Gestión de Cursos" />

      <div className="flex gap-4 mt-6">
        <StatCard title="Students" total="50" />
        <StatCard title="Courses" total="12" />
        <StatCard title="Enrollments" total="145" />
      </div>
    </main>
  );
}
