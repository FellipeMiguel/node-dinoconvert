const fs = require('fs');

fs.readFile('./fellipe.miguel', (err, data) => {
    if(err) {
        console.log('Ocorreu uma falha durante a leitura do arquivo!');
    } else {
        console.log(data);
    }
});