const mysql = require("mysql2");
const flash = require("connect-flash");
// Initialize database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_project",
});

const userRegister = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;

  if (username && password && email) {
    db.query(
      `INSERT INTO accounts (username, password, email) VALUES ('${username}','${password}','${email}')`,
      (err, results) => {
        if (err) {
          throw err;
        } else {
          res.redirect("/");
        }
      }
    );
  } else {
    res.redirect("/");
    res.end();
  }
};

module.exports = userRegister;
