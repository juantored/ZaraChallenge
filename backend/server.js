import app from './app.js';

// Variable del puerto que usaremos y Iniciamos el servidor, daremos un aviso de que arranco el Backend
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Backend en el puerto ${PORT}`));
