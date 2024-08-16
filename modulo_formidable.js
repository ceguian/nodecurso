/*
There is a very good module for working with file uploads, called "Formidable".

The Formidable module can be downloaded and installed using NPM:
C:\Users\Your Name>npm install formidable
*/


var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {

    if (req.url == '/fileupload') {
        //si recibes fileupload, reescribe a Archivo cargado
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            //guardar el archivo dentro del servidor
            var oldpath = files.filetoupload.filepath;
            var newpath = 'D:/nodecurso/' + files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('Archivo Cargado y Guardado');
                res.end();
            });
        });
    } else {
        //formulario para subir un archivo
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name= "filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);