const { colecaoUf } = require('../dados/dados')

function buscarUfs () {  //1
    return colecaoUf;
}

function buscarUfsPorNome (nomeUF) {   //2
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUF.toLowerCase()));
};

function buscarUfPorId (id) {  // 3
    const idUF = parseInt(id);
    return colecaoUf.find(uf => uf.id === idUF);
}

exports.buscarUfs = buscarUfs;
exports.buscarUfsPorNome = buscarUfsPorNome;
exports.buscarUfPorId = buscarUfPorId; 


/*
* 1 - Retorno de toda a coleção
* 2 - Busca de UF através do nome
* 3 - Retorno da UF de ID específico
*/
