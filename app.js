// importar http
const http = require('http');

// crear servidor 
const server = http.createServer((req, res) => {
  // header de respuesta
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  
  // enviar respuesta
  res.end('¡Hola Mundo!');
}); 

// escuchar en el puerto 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});