const db = require('./data/db-config')

function getAll() {
    return db('voters')
}

async function insert(vote) {
    const [newVote] = await db('voters').insert(vote, ['name', 'gender', 'birthday'])
    return newVote
}

module.exports = {
    getAll,
    insert
};