const moment = require('moment')
const travels = require('../controllers/travel')

const conexao = require('../infra/conexao')

class Travel {
    receive(travel, res) {
        const created_at = moment().format('YYYY-MM-DD HH:mm:ss')

        const insertion = { ...travel, created_at }
        const sql = 'INSERT INTO Travels SET ?'

        conexao.query(sql, insertion, (error, result) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(result)
            }
        })
    }

    list(res) {
        const sql = ' SELECT * FROM Travels'

        conexao.query(sql, (error, result) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(result)
            }
        })
    }

    download(res) {
        const sql = "SELECT * FROM Travels INTO OUTFILE '/tmp/outfile.csv' "
        conexao.query(sql, (error, result) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(result)
            }
        })
    }
}

module.exports = new Travel