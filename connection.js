const mysql = require(`mysql2`);
const keys = require(`./keys`);

exports.connection = function() {
  const connection = mysql.createConnection({
    host: `localhost`,
    user: `root`,
    password: `${keys.sql.key}`,
    database: `thestore`,
  });
  return connection;
};

