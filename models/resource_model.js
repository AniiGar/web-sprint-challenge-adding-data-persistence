const db = require('../data/dbConfig')

module.exports = {
    find,
    add
}

function find() {
    return db('resources')
}

function add(resource) {
    return db('resources')
        .insert(resource, "id")  
        .then(ids => ({ id: ids[0] })); 
}