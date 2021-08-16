const Travel = require("../models/travel")

module.exports = app => {
    app.get('/insert', (req, res) =>{
        Travel.list(res)
    })

    app.post('/insert', (req,res) => {
        const travel = req.body

        Travel.receive(travel, res)
    })
    
    app.get('/download', (req,res)=>{
        Travel.download(res)
    })

}