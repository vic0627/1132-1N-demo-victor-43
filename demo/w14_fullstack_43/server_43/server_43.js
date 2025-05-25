import express from "express";

const app_43 = express();

app_43.use(express.static("public"));
app_43.set("view engine", "ejs");

app_43.use("/", (req, res, next) => {
  res.render("index", {
    title: "Express",
    name: "VICTOR HSU",
    id: "213410243",
  });
});

const port = process.env.PORT || 5000;

app_43.listen(port, () => {
  console.log(`connecting on port: ${port}`);
});
