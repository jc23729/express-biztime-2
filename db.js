/** Database setup for BizTime. */

const { Client } = require("pg");

const client = new Client({
  // connectionString: "postgresql:///biztime"
  user: "postgres",
  database: "biztime",
  host: "localhost",
  port: 5432,
});

client.connect();

module.exports = client;

// const { Client } = require("pg");
// // "postgresql://sysadmin:123@127.0.0.1/biztim";
// const connectString = "postgresql://sysadmin:123@127.0.0.1/biztim";
// let db = new Client({
//   connectionString: connectString,
// });

// db.connect()
//   .then(() => {
//     console.log("connected successfully");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// module.exports = db;

// This one below is the other way

// const client = new Client({
//     user: "sysadmin",
//     password: "123",
//     host: "127.0.0.1",
//     port: 5432,
//     database: "testdb"
// });
