const db = require("../db");

class user {
  static createUser(name, address, email, password) {
    return db.execute(
      `INSERT INTO user ( name, address, email, password) VALUES ( "${name}", " ${address}", " ${email}", "${password}"  )  `
    );
  }

  static getUserByEmail(email) {
    console.log(email);
    return db.execute(`select * from user where email = "${email}" `);
  }
}

module.exports = user;
