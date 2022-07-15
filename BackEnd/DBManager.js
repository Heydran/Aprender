const { Pool, Client } = require('pg')

class DBManager {
    conection = {
        user: 'postgres',
        host: 'localhost',
        database: 'estacionamento',
        password: '1234',
        port: 5432,
    }
    
    quary(table, coluns='*', id=-1) {
        const client = new Client(this.conection)
        client.connect()
        
        if(id = -1){
            var chosen = ""
        }else{
            var chosen = `WERE ${table}.cod_${table.toLowerCase}`
        }
        client.query(`SELECT ${coluns} FROM ${table} ${chosen}`, (err, res) => {
            console.log(err);
            var resultado = res.rows
            client.end()
            return resultado
        })
    }
    qt(){
        const client = new Client(this.conection)
        var resultado
        client.connect()
        client.query(`SELECT * FROM Cliente`, (err, res) => {
            console.log(res.rows);
            resultado = res.rows
            client.end()
            return resultado
        })
    }
}




var o = new DBManager()
/*console.log(o.quary("Cliente"))*/
console.log(o.qt())




Object.defineProperty(exports, "__esModule", { value: true });
exports.DBManager = DBManager