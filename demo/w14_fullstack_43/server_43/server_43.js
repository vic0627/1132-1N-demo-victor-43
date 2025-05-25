import express from "express";
import apiProductRouter from "./routes/api/apiProductRouter_43.js";

const app_43 = express();

app_43.use(express.static("public"));
app_43.set("view engine", "ejs");

app_43.use("/product_43/static", (req, res, next) => {
  res.render("product_43/static", {
    title: "Get Products - Static",
    name: "VICTOR HSU",
    id: "213410243",
  });
});

app_43.use("/api/product_43", apiProductRouter);

const port = process.env.PORT || 5000;

app_43.listen(port, () => {
  console.log(`connecting on port: ${port}`);
});
