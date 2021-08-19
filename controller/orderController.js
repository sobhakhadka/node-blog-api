const orderModel = require("../models/order");

module.exports.getSingleOrder = (req, res, next) => {
  orderModel
    .getSingleOrderData(req.params.id)
    .then(([rows, metadata]) => res.status(200).json(JSON.stringify(rows[0])))
    .catch((err) =>
      res.status(400).send({
        message: err,
      })
    );
};

module.exports.getAllOrders = (req, res, next) => {
  orderModel
    .getAllOrdersData()
    .then(([rows, metadata]) => res.status(200).json(JSON.stringify(rows)))
    .catch((err) =>
      res.status(400).send({
        message: err,
      })
    );
};

module.exports.addOrder = (req, res, next) => {
  orderModel
    .createOrder(req.body.name, req.body.price, req.body.details)
    .then(res.status(201).json({ message: "order created" }))
    .catch((err) =>
      res.status(400).send({
        message: err,
      })
    );
};

module.exports.deleteOrder = (req, res, next) => {
  orderModel
    .deleteOrder(req.params.id)
    .then(res.status(200).json({ message: "order deleted" }))
    .catch((err) =>
      res.status(400).send({
        message: err,
      })
    );
};

module.exports.updateOrder = (req, res, next) => {
  orderModel
    .updateOrder(
      req.params.id,
      req.body.name,
      req.body.price,
      req.body.details
    )
    .then(res.status(200).json({ message: "order updated" }))
    .catch((err) =>
      res.status(400).send({
        message: err,
      })
    );
};
