import express from 'express'; // Crea fichero HTTP y facilita hacer peticiones
import fetch from 'node-fetch';
import cors from 'cors'; // Para permitir peticiones del FrontEnd al BackEnd
import dotenv from 'dotenv';

dotenv.config();

// Creamos la instancia de servidor
const app = express();
// Permite que tu frontend haga peticiones
app.use(cors()); 
app.use(express.json());

// Variables de entorno de la API externa
const API_URL = process.env.API_URL;
const API_HEADER_KEY = process.env.API_HEADER_KEY;

// Llamada a la API para obtener la lista de móviles
app.get('/mobiles', async (req, res) => {
  const { search = '', limit = 30, offset = 0 } = req.query;

  try {
    const response = await fetch(
      `${API_URL}/products?search=${search}&limit=${limit}&offset=${offset}`,
      {
        headers: {
          'x-api-key': API_HEADER_KEY,
        },
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Error al cargar los móviles' });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Llamada a la API para obtener los detalles de un móvil
app.get('/mobiles/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const response = await fetch(`${API_URL}/products/${id}`, {
      headers: { 'x-api-key': API_HEADER_KEY },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Error al cargar el móvil' });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Variable del puerto que usaremos y Iniciamos el servidor, daremos un aviso de que arranco el Backend
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend en el puerto ${PORT}`));