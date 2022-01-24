const requestAPI = require('./Requisicao');
const http = require('http');
var porta = 5573;

http.createServer((req, res) => {
    if(req.url === "/"){
        requestAPI.chamarAPI(function(resposta){
            res.write(JSON.stringify(resposta));
            res.end();
        });
    }
}).listen(porta, () => {
    console.log("Server rodando na porta " + porta + "...");
});