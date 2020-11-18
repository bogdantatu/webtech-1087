const express = require("express");
const bodyParser = require("body-parser");
const kittenRouter = require('/Users/bogdantatu/Desktop/Facultate/WebTech/webtech-1087/s8/routers/kitten-router.js');

const app = express();

app.locals.kittens = [];

for (let i = 0; i < 100; i++) {
  app.locals.kittens.push({
    id: i,
    name: "kitten " + i,
    color: "some color",
    weight: i % 10,
  });
}

app.use((req, res, next) => {
  // res.status(401).json({ message: 'not allowed' })
  console.log("request : " + req.method + " " + req.url);
  console.log();
  next();
});

app.use(bodyParser.json());

app.use((req, res, next) => {
  if (
    req.headers["kitten-secret"] &&
    req.headers["kitten-secret"] === "supersecret"
  ) {
    next();
  } else {
    res.status(401).json({ message: "you need the secret to proceed" });
  }
});

app.use("/kitten-api", kittenRouter);

/*
  kitten
  {id:1, name: 'some string', color: 'some string', weight: 10}
*/

app.listen(8080);
