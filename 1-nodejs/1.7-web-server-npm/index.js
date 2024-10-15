// URL 1: localhost:8080 => index.html
// URL 2: localhost:8080/pagina1.html => pagina1.html
// URL 2: localhost:8080/pagina2.html => pagina2.html
const http = require("http");
const url = require("url");
const fs = require("fs");
const colors = require("colors");

const PORT = 8080;

const server = http.createServer((request, response) => {
  // console.log('request:', request);
  // console.log('request:', request.url);

  const urlObject = url.parse(request.url);

  let fileSystemPath = "";
  if (urlObject.path === "/") {
    fileSystemPath = "static/index.html";
  } else {
    fileSystemPath = `static${urlObject.path}`;
  }

  console.log("fileSystemPath:", fileSystemPath);

  fs.stat(fileSystemPath, (error) => {
    if (!error) {
      // leer la pagina correspondiente

      fs.readFile(fileSystemPath, (error, file) => {
        if (!error) {
          // regresar la pagina correspondiente
          const status = 200;
          const mimeType = { "Content-type": "text/html" };
          response.writeHead(status, mimeType);
          response.write(file);
          response.end();
        } else {
          // si existio la ruta pero no e pudo leer el archivo
          const status = 500;
          const mimeType = { "Content-type": "text/plain" };
          response.writeHead(status, mimeType);
          response.write("Error al leer al archivo");
          response.end();
        }
      });

      // response.end();
    } else {
      // si ese fileSystemPath no existe avisar al cliente
      const status = 404;
      const mimeType = { "Content-type": "application/json" };
      response.writeHead(status, mimeType);
      const res = JSON.stringify({ message: "pagina no fue encontrada" });
      response.write(res);
      response.end();
    }
  });
});

console.log("Servidor corriendo...".blue);
console.log("port:".green, PORT);

server.listen(PORT);
