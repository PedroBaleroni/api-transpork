const moment = require('moment')
const clean = require('../controllers/clean')

const conexao = require('../infra/conexao')
const travel = require('./travel')

class Clean {
    receive(clean, res) {
        const insertion = { ...travel }
        const sql = 'INSERT INTO Clean SET ?'

        conexao.query(sql, insertion, (error, result) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(result)
            }
        })
    }

    list(res) {
        const sql = 'SELECT * FROM Clean'

        conexao.query(sql, (error, result) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(result)
            }
        })

    }
}

module.exports = new Clean