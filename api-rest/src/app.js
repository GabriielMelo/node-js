import express from 'express'; 

const app = express(); 

// mock - 

const selecoes = [
    {id:1,selecao: 'Brasil', grupo: 'G'},
    {id:2,selecao: 'Suiça', grupo: 'G'},
    {id:3,selecao: 'Servia', grupo: 'G'},
    {id:4,selecao: 'Camarões', grupo: 'G'},
]

app.get('/', (req, res) => { 
    res.send('Curso de node-js')

})

app.get('/selecoes', (req,res)=>{
    res.status(200).send(selecoes);
})


















export default app;

// ferramenta nodemon : faz escuta do servidor de forma ativa, não sendo necessário derrubar o servidor para atualizações.
//instalando nodemon : no terminal, digite npm install nodemon -D em seguida no arquivo package.json no campo script crie um novo script :
// "scripts": {
// "dev" : "nodemon src/app.js",
//para iniciar o nodemon, no terminal digite npm run dev ( nome que foi definido no script );

