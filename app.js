const express = require('express');
const app = express();
const port = 3000;
const lista=[
    {id: 1,name: 'Jonh Doe'},
    {id: 2,name: 'Jane Doe'},
];
const cors  = require('cors');
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send(lista);
});

app.listen(port, ()=>{
    console.log("exemplo de deu certo");
});