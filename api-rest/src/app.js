const express = require('express') // importando express
const app = express(); // criando uma instancia;


// criar rota padrão ou raiz.

app.get('/', (req, res) => { // '/' menciona rota raiz
    res.send('Curso de node-js')

})


// ferramenta nodemon : faz escuta do servidor de forma ativa, não sendo necessário derrubar o servidor para atualizações.
//instalando nodemon : no terminal, digite npm install nodemon -D em seguida no arquivo package.json no campo script crie um novo script :
// "scripts": {
// "dev" : "nodemon src/app.js",
//para iniciar o nodemon, no terminal digite npm run dev ( nome que foi definido no script );

