const express = require("express");
const productRouter = require("./routes/productRoutes");

const app = express();
app.use(express.json());
app.use(express.urlencoded());

const port = process.env.PORT || 3000;

app.use("/products", productRouter);

// 404 page
app.get((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
