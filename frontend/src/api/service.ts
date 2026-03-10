import type { Mobile, MobileInfo } from '../types/Mobile';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getListMobiles = async (search: string, limit: number, offset: number): Promise<Mobile[]> => {
  const response = await fetch(`${BACKEND_URL}/mobiles?search=${search}&limit=${limit}&offset=${offset}`);

  if (!response.ok) throw new Error("Error al cargar el catalogo de móviles");
  return response.json();
}

export const getDetailMobile = async (id: string): Promise<MobileInfo> => {
  const response = await fetch(`${BACKEND_URL}/mobiles/${id}`);

  if (!response.ok) throw new Error("Error al cargar el catalogo de móviles");
  return response.json();
}