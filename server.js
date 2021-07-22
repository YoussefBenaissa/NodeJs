// import le paquet express
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// creer une application express
const app = express();

//importer la page dacceuille
const genererModele = require("./pages/page-get.js");

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// ici on utilise une regex sachant quon peut recuperer la valeur de ce qui entre paranthese dans la regex grace a rep.params et dc on l'affecte a une variable pour la recuperer !
// app.get(/^\/(|test)$/, async (req, res) => {
//   const nomPage = req.params[0] === "" ? "index" : req.params[0];
//   const indexHtml = await genererModele(nomPage);
//   res.send(indexHtml);
// });

// integrer react a notre appli:
// exemple 1 : recuperer des info de node pr react
app.use(express.json());
app.use(express.static("./client/build"));
app.get("/react", async (req, res) => {
  res.send({ msg: "Hello my friend" });
});
// exemple 2 : utiliser notre appli react sur node
app.get("/*", async (_, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//creation d'une route simple:
// app.get("/test", async(req, res) => {
//     const testHtml = await genererModele("test");
//     res.send(testHtml);
// });

//route interne pour acceder o style etc..

// app.use(
//   "/css",
//   express.static(
//     "C:/Users/ybena/OneDrive/Bureau/NodeJS/nodejs-express-mysql/css/"
//   )
// );

//tuto crud: on appelle le fichier customer.routes.js ici et on ecoute ce qui renvoie
require("./app/routes/customer.routes.js")(app);
app.listen();

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
