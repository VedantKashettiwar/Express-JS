const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // res.send('Welcome to my home page');
  res.write("<h1>Welcome to my home page<h1>");
  res.write("<h2>Welcome to my home page again<h2>");
  res.send();
});
app.get("/about", (req, res) => {
  res.send("Welcome to my about page");
});
app.get("/contact", (req, res) => {
  res.send("Welcome to my contact page");
});
// app.get("/temp", (req, res) => {
//   res.send([
//     {
//       id: 1,
//       name: "Vedant",
//     },{
//         id: 1,
//         name: "Vedant",
//       },{
//         id: 1,
//         name: "Vedant",
//       }
//   ]);
// });

app.get("/temp", (req, res) => {
    res.json([
      {
        id: 1,
        name: "Vedant",
      },{
          id: 1,
          name: "Vedant",
        },{
          id: 1,
          name: "Vedant",
        }
    ]);
  });

app.listen(3002, () => {
  console.log("Server Started");
});
