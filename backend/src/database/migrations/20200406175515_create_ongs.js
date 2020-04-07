exports.up = function(knex) { // Pra criar uma nova migration: npx knex migrate:make <nome da migrate>
  return knex.schema.createTable('ongs', function(table) { // O método up é o responsável pela criação da tabela
      table.string('id').primary()
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.string('whatsapp').notNullable()
      table.string('city').notNullable()
      table.string('uf', 2).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs')
};
// Para executar: npx knex migrate:latest
// Para tirar a última migration criada: npx knex migrate:rollback