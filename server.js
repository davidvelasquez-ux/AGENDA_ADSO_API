// Importamos la librería json-server instalada en package.json
const jsonServer = require("json-server");
// Creamos la aplicación principal de json-server
const server = jsonServer.create();
// Creamos un router que usará db.json como "base de datos"
const router = jsonServer.router("db.json");
// Cargamos middlewares por defecto (logs, CORS, etc.)
const middlewares = jsonServer.defaults();
// Definimos el puerto:
// - Render define process.env.PORT automáticamente.
// - En local usamos 3000 si PORT no existe.
const PORT = process.env.PORT || 3000;
// Activamos los middlewares en el servidor
server.use(middlewares);
// Permitimos leer datos JSON enviados en el body de las peticiones
server.use(jsonServer.bodyParser);
// Usamos el router de json-server que expone las rutas REST
server.use(router);
// Iniciamos el servidor y mostramos un mensaje en consola
server.listen(PORT, () => {
console.log(`JSON Server está corriendo en el puerto ${PORT}`);
});
