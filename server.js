const { text } = require('express');
const express = require('express');
const app = express();

/* reutiliza el codigo html ya existente en un archivo o folder */
const hbs = require('hbs');
require('./hbs/helpers'); /* Esta linea importa el archivo helpers */

/* con esto se reconoce el puerto entregado por heroku, si no lo reconoce le asigna el 3000 */
const port = process.env.PORT || 3000;

/* Con esta linea estoy utilizando un meadleweare y se debe especificar la carpeta publica */
app.use(express.static(__dirname + '/public'))

/* Express HBS Engine */
hbs.registerPartials(__dirname + '/views/parciales'); /* Aqui se registran los parciales, sobre el template engine */
//hbs.registerPartials(__dirname + '/views/head');
app.set('view engine', 'hbs');



/*
Declara una variable llamada app que es un producto d ela funcion de express, esto nos
permite utilizar express como nosotros deseamos
*/


/* 
Se configura una solicitud get cuando el path sea '/'
ademas permite que todas las peticiones que entren por '/' ejecuten esta funcion
esto redireccion a otra pagina creando otro app.get
*/
app.get('/', (req, res) => {
    /* con .render se le indica que muestre el html que esta en home.hbs */
    res.render('home', {
        nombre: 'Felipe Sepúlveda'
    });
});

app.get('/about', (req, res) => {
    /* con .render se le indica que muestre el html que esta en home.hbs */
    res.render('about');
});

/*
Cuando se usa la libreria express se debe especificar otra solicitud si se quiere llamar con algo despues del '/'
por ejemplo '/data'
*/

/*
app.get('/data', (req, res) => {
    res.send('Hola Mundo!');
});
*/

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});