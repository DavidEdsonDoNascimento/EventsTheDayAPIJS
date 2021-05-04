class Tables
{
    init(connection)
    {
        this.connection = connection
        this.createCategory()
        this.createEvent()
    }

    messageCreateTableSuccess(table_name)
    {
      //deixei assim pq quando eu for criar os logs será mais facil
      console.log('Tabela '+ table_name +' criada com sucesso')
    }

    createCategory()
    {
        this.connection.query(
        `CREATE TABLE IF NOT EXISTS category (
            id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR(48) NOT NULL,
            description VARCHAR(255),
            status TINYINT DEFAULT 1,
            PRIMARY KEY (id)
        )
        ENGINE = InnoDB
        COMMENT = 'Tabela responsável por armazenar as categorias dos eventos'
        `, erro => {
            
            if(erro) {
                console.log(erro)
                return
            }

            this.messageCreateTableSuccess('category')
        })
    }

    createEvent()
    {
        this.connection.query(`
            CREATE TABLE IF NOT EXISTS event (
                id INT NOT NULL AUTO_INCREMENT,
                summary varchar(255) NOT NULL,
                obs text(1000),
                category_id INT NOT NULL,
                status TINYINT DEFAULT 1,
                PRIMARY KEY (id),
                FOREIGN KEY (category_id) REFERENCES category(id)
            )
        `, error => {
            
            if(error){
                console.log(error)
                return
            }

            this.messageCreateTableSuccess('event')
        })

    }
}

module.exports = new Tables