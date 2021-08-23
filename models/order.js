const db = require("../db");

class order {
  static getSingleOrderData(id) {
    // returning a promise
    return db.execute(`SELECT * FROM order WHERE id = ${id}`);
  }
  static getAllOrdersData() {
    return db.execute("SELECT * FROM test.order");
  }

  static deleteOrderID(id) {
    return db.execute(`DELETE FROM order WHERE id = ${id}`);
  }

  static createOrder(name, price, details) {
    return db.execute(
      `INSERT INTO order ( name, price, details) VALUES ( "${String(
        name
      )}", " ${String(price)}", " ${String(details)}"  )  `
    );
  }

  static updateOrder(id, name, price, details) {
    return db.execute(
      `UPDATE order SET name = "${String(name)}" , price = "${String(
        price
      )}" , details = "${String(details)}" WHERE id = ${id}`
    );
  }
}

module.exports = order;
