const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'data.json');
const contenido = fs.readFileSync(dataFilePath, 'utf-8');
const registros = JSON.parse(contenido);

let id = 1;
const registrosConId = registros.map((registro) => {
   return { id: id++, ...registro };
});

const contenidoModificado = JSON.stringify(registrosConId, null, 2);
fs.writeFileSync(dataFilePath, contenidoModificado);

console.log('IDs agregados exitosamente al archivo data.json.');