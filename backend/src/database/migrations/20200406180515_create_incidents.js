
exports.up = function(knex) { // Pra criar uma nova migration: npx knex migrate:make <nome da migrate>
    return knex.schema.createTable('incidents', function(table) { // O método up é o responsável pela criação da tabela
        table.increments()
        table.string('title').notNullable()
        table.string('description').notNullable()
        table.decimal('value').notNullable()
        
        table.string('ong_id').notNullable()

        table.foreign('ong_id').references('id').inTable('ongs')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('incidents')
  };
// Para executar: npx knex migrate:latest
// Para tirar a última migration criada: npx knex migrate:rollback
// Mais infoemações: npx knex