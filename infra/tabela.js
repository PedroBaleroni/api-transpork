class Table{
    init(conexao){
        console.log('Created Database')
        this.conexao = conexao

        this.createTravelsTable()
        this.createCleanTable()
        this.createViewTable()
    }

    createTravelsTable(){
        const sql = 'CREATE TABLE IF NOT EXISTS Travels (created_at varchar(50) NOT NULL, entry_id int NOT NULL AUTO_INCREMENT, field1 varchar(50) NOT NULL, field2 varchar(20) NOT NULL, field3 varchar(50) NOT NULL, field4 varchar(4) NOT NULL, field5 varchar(50) NOT NULL, PRIMARY KEY(entry_id))'

        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            }else{
                console.log('DB Travels created')
            }
        })
    }

    createCleanTable(){
        const sql = 'CREATE TABLE IF NOT EXISTS Clean (created_at datetime NOT NULL, entry_id int NOT NULL AUTO_INCREMENT, field1 varchar(50) NOT NULL, field2 varchar(20) NOT NULL, field3 varchar(50) NOT NULL, field4 varchar(4) NOT NULL, field5 varchar(50) NOT NULL, PRIMARY KEY(entry_id))'

        this.conexao.query(sql, (error) => {
            if(error){
                console.log(error)
            }else{
                console.log('DB Clean created')
            }
        })
        
    }

    createViewTable(){
        const sql = 'CREATE TABLE IF NOT EXISTS View (travel_id int NOT NULL AUTO_INCREMENT, starttime datetime NOT NULL, endtime datetime NOT NULL, breakcount int NOT NULL, humidity float NOT NULL, temperature float NOT NULL, density float NOT NULL, PRIMARY KEY (travel_id))'

        this.conexao.query(sql, (error) =>{
            if(error){
                console.log(error)
            }else{
                console.log('DB View created')
            }
        })
    }
}

module.exports = new Table