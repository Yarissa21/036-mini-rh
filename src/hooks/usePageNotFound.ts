import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function usePageNotFound() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    console.warn(`[404] Ruta no encontrada: ${pathname}${search}`);
  }, [pathname, search]);
}