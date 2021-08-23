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

  static createOrder(user_id, total_price) {
    return db.execute(
      `INSERT INTO order ( user_id, total_price) VALUES ( ${id}, " ${String(
        total_price
      )}"  ) `,
      function (err, result) {
        if (err) {
          console.log(err);
        }
        console.log(result);
        return result;
      }
    );
  }

  static updateOrder(id, name, price, details) {
    return db.execute(
      `UPDATE order SET name = "${String(name)}" , price = "${String(
        price
      )}" , details = "${String(details)}" WHERE id = ${id}`
    );
  }

  static addProductToOrder(product_data) {
    // product_data is an object with the following properties
    // order_id,product_id, product_count (array format)
    return db.query(
      "INSERT INTO order_product ( order_id, product_id, product_count) VALUES ?",
      [product_data]
    );
  }
}

module.exports = order;
