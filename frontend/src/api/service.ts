import type { Mobile, MobileInfo } from '../types/Mobile';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
//const API_KEY = import.meta.env.VITE_API_HEADER_KEY;

// export const getListMobiles = async (
//     search: string,
//     limit: number,
//     offset: number
// ): Promise<Mobile[]> => {    
//     console.log(`${API_BASE_URL}/products?search=${search}&limit=${limit}&offset=${offset}`)

//     const response = await fetch(
//         `${API_BASE_URL}/products?search=${search}&limit=${limit}&offset=${offset}`,
//         {
//             method: "GET",
//             headers: {
//                 "x-api-key": API_KEY,
//             },
//         }
//     );

//     if (!response.ok) {
//         throw new Error("Error al cargar el catalogo de móviles");
//     }

//     return response.json();
// }

// export const getDetailMobile = async (
//     id: string
// ): Promise<MobileInfo> => {
//     console.log(`${API_BASE_URL}/products/${id}`);

//     const response = await fetch(`${API_BASE_URL}/products/${id}`,
//         {
//             method: "GET",
//             headers: {
//                 "x-api-key": API_KEY,
//             },
//         }
//     );

//     if (!response.ok) {
//         throw new Error("Error al cargar el catalogo de móviles");
//     }

//     return response.json();
// }

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