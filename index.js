const express = require("express");
const productRouter = require("./routes/productRoutes");

const app = express();
app.use(express.json());
app.use(express.urlencoded());

const port = process.env.PORT || 3000;

app.use("/products", productRouter);
// db.execute("SELECT * FROM products").then(console.log).catch(console.log);

app.get("/", (req, res) => console.log("GET request"));

app.listen(port, () => console.log(`Listening on port ${port}`));
