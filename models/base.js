/*var login = 'aswwasdda';
var name = 'asasasddd';
var surname = 'aaasdsdsdas';
var address = 'asdaasdasdsdasdaasd';
//import {addNewUser} from '/app';*/
module.exports = function addUser(login, name, surname, address) {
var client;
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://master:pass@localhost:5432/database';
client = new pg.Client(connectionString);
client.connect();
   
var InsertQuery = 'INSERT INTO users (login, userRole, name, surname, userAdr ) VALUES ($1, $2, $3, $4, $5)';
const query = client.query(InsertQuery,[login, 1, name, surname, address]);
query.on('end', () => { client.end(); });
}
//export {addUser};
