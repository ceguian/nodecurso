var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Append File permite añadir contenido especifico al archivo. Si el archivo no exite, lo crea.', function (err) {
    if (err) throw err;
    console.log('Saved!');
}); 