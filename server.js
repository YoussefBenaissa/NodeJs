// import le paquet express
const express = require("express");
const bodyParser = require("body-parser");

// creer une application express
const app = express();

//importer la page dacceuille
const genererPageAccueil = require('./pages/index-get.js')
const genererPageTest = require('./pages/index2-get.js')

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// simple route
app.get("/", async(req, res) => {
    const indexHtml = await genererPageAccueil()
    res.send(indexHtml)
})
app.get("/test", async(req, res) => {
    const indexHtml2 = await genererPageTest()
    res.send(indexHtml2)
})

//route interne pour acceder o style etc..

app.use('/css', express.static('C:/Users/ybena/OneDrive/Bureau/NodeJS/nodejs-express-mysql/css/'))

//tuto crud: on appelle le fichier customer.routes.js ici et on ecoute ce qui renvoie
require("./app/routes/customer.routes.js")(app);
app.listen();






// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});