/* eslint-env node, es6*/

const { join } = require("path");
const { readFile } = require("fs");
const { promisify } = require("util");
const readFileAsync = promisify(readFile);
const Read_Option = { encoding: "UTF-8" };
const html_url =
    "C:/Users/ybena/OneDrive/Bureau/NodeJS/nodejs-express-mysql/html";

const lirefichierHtml = (file) =>
    readFileAsync(join(html_url, file), Read_Option);

module.exports = async(nomPage) => {
    // recuperer le contenu de tout les pages grace a promise all qui va nous permettre de recuperer les reponses en meme temps
    // ici on utilise le destructuring qui permert daffecter directement les valeur du tableau a nos constant !!!!!!
    const [modeleHtml, headHtml, bodyHtml] = await Promise.all([
        lirefichierHtml("modele.html"),
        lirefichierHtml(`${nomPage}.head.html`),
        lirefichierHtml(`${nomPage}.body.html`),
    ]);
    const indexHtml = modeleHtml
        .replace("{{EN-TETE}}", headHtml)
        .replace("{{CORPS}}", bodyHtml);
    return indexHtml;
};