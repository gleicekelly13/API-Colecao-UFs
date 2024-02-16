const express = require('express');
const app = express();

const { buscarUfs, buscarUfsPorNome, buscarUfPorId } = require('./servicos/servicos');

app.get('/ufs', (req, res) => {  //Configuração do endpoint ufs, pois ele representa o domínio da coleção
    const nomeUF = req.query.busca;  //`req.query` armazena o valor do parâmetro enviado pelo cliente
    const resultado = nomeUF ? buscarUfsPorNome(nomeUF) : buscarUfs();
    if (resultado.length > 0) {  /*Aplicação do tratamento de erro na rota(verifica se o comprimento do array `resultado` é 
    maior que zero, isso significa que estados(ufs) foram encontrados na busca) ; A rota '/ufs' consome a função buscarUfs do servico.js
    */
        res.json(resultado);
    } else {  //A API vai retornar o código 404 caso nenhuma UF seja encontrada na busca
        res.status(404).send({ "erro" : "Nenhuma UF encontrada" })
    }
});

app.get('/ufs/:iduf', (req, res) => {  //A rota '/ufs/:iduf' consome a função buscarUfporID
    const uf = buscarUfPorId(req.params.iduf);

    if(uf) {
        res.json(uf);
    } else if (isNaN(parseInt(req.params.iduf))) {
        res.status(400).send({ "erro": "Requisição inválida" });
    } else {
        res.status(404).send({ "erro" : "UF não encontrada" });
    }
});

app.listen(8081, () => {
    console.log('Servidor iniciado na porta 8080');
});
