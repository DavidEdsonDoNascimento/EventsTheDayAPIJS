class Tables
{
    init(connection)
    {
        this.connection = connection
        this.createCategory()
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
            if(erro) console.log(erro)
            else this.messageCreateTableSuccess('category')
        })
    }
}

module.exports = new Tables