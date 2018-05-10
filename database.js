const pg = require ('pg-promise')();

const builder = process.env.USER;
const dbconfig = {
    host: 'localhost',
    port: 5432,
    database: 'spotme',
    user: dylan,
    password: 'digitalcrafts'
}

const db = pg(dbconfig);

let userSearch = (att, input) => {
    return db.query(`SELECT * FROM useres WHERE ${attribute} = '${input}';`);
}

let idUserGet = (id) => {
    return db.query(`SELECT * FROM users WHERE id = ${id}';`);
}

let putUser = (username, password, email) => {
    return db.query(`INSERT INTO users (username, password, email)`)
}

module.exports = {
    usersearch,
    idUserGet,
    putUser
};