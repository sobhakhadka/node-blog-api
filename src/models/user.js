// const db = require("../db");

// class user {
//   static createUser(name, address, email, password) {
//     return db.execute(
//       `INSERT INTO user ( name, address, email, password) VALUES ( "${name}", " ${address}", " ${email}", "${password}"  )  `
//     );
//   }

//   static getUserByEmail(email) {
//     console.log(email);
//     return db.execute(`select * from user where email = "${email}" `);
//   }
// }

// module.exports = user;


// --------------Rudransh-Changes -------------- //

const db = require("../db")
class user{
    static create(data) {
    db.execute(
        `insert into registration (firstName, lastName, gender, email, password, number, admin)
        values("${firstName}","${lastName}","${gender}","${password}","${number}","${admin}")`);      
    }
    static getUsers(){
      db.execute(`select firstName, lastName, gender, email, number from registration`)
             }
    static getUserByUserId(id){
       db.execute(
            `select id, firstName, lastName, email, number from registration where id="${id}"` );
    }
    static updateUser(data){
        db.execute(
            `update registration set firstName="${firstName}", lastName="${lastName}", gender="${gender}", email="${email}", password="${password}", number="${number}" where email = "${email}"`);        
        }
    static deleteUser(data){
        db.execute(
            `delete from registration where id="${id}"`);            
    }
    static getUserByUserEmail(email){
        db.execute(
            `select * from registration where email = "${email}" `);       
    }
    static signUp(data){
        db.execute(
            `insert into registration (firstName, lastName, gender, email, password, number)
            ("${firstName}","${lastName}","${gender}","${password}","${number}","${admin}")`);
}
}
module.exports = user;