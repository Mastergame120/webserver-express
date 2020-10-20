/* Lo primero es declarar una constante http */
const http = require('http');

/* Para escuchar peticion http se debe crear el servidor de esta forma */
/* Recibe un callback con req, res que el servidor enviara*/
http.createServer((req, res) => {

        /* Con esta linea regresamos un json */
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
                nombre: 'Felipe Sepúlveda',
                edad: 33,
                url: req.url
            }
            //res.write('Hola Mundo');

        /* Envia la salida en formato Json */
        res.write(JSON.stringify(salida));
        /* esta linea le dice al servidor que ya se termino la respuesta */
        res.end();

    })
    .listen(8080); /* Se debe configurar el puerto por el cual escuchara el servidor */

console.log('Escuchando el puerto: 8080');