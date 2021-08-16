const customExpress = require('./config/customExpress');
const conexao = require('./infra/conexao');
const Table = require('./infra/tabela');

conexao.connect(error => {
    if (error) {
        console.log(error)
    } else {
        console.log("conexão com sucesso")

        Table.init(conexao)
        const app = customExpress()

        app.listen(3000, () => console.log("Apresentação realizada"))

    }

})

// app.get('/atendimentos',(req, res) => res.send('Servidor rodando liso lisinho'))