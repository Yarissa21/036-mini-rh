import { Link } from 'react-router-dom';
import { usePageNotFound } from '../hooks/usePageNotFound';

export default function NotFoundPage() {
  usePageNotFound();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-7xl font-extrabold text-brand-800 mb-2">404</p>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          Página no encontrada
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          La dirección que buscas no existe o fue movida. Verifica la URL o
          regresa al inicio.
        </p>
        <Link
          to="/dashboard"
          className="inline-block px-5 py-2.5 bg-brand-800 text-white rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors"
        >
          Volver al dashboard
        </Link>
      </div>
    </div>
  );
}