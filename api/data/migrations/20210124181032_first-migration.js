exports.up = async (knex) => {
  await knex.schema
    .createTable('voters', (voters) => {
      voters.increments('voter_id')
      voters.string('name', 100).notNullable()
      voters.string('gender', 200).notNullable()
      voters.date('birthday').notNullable()
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('voters')
}
