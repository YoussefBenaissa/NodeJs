/* eslint-env node, es6*/

const { readFile } = require('fs');
const { promisify } = require('util')
const readFileAsync = promisify(readFile)
const Read_Option = { encoding: 'UTF-8' }
const Index_URL = 'C:/Users/ybena/OneDrive/Bureau/NodeJS/nodejs-express-mysql/index2.html'


module.exports = async() => {
    // recuperer le contenu du fichier html index.Html et retourner la page html
    const data = await readFileAsync(Index_URL, Read_Option)
    return data
}