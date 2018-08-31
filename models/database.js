 var pg = require('pg');
//var db = pgp('postgres://username:password@host:port/database');
 var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';

 var client = new pg.Client(connectionString);

 client.connect();
 const query = client.query(
     'CREATE TABLE items(login VARCHAR(255) not null, userName VARCHAR(255) not null, userAdr VARCHAR(255) not null)');
 query.on('end', () => { client.end();});