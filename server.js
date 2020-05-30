//Dependencies
const express = require("express");

//Set Up Express App
const app = express();
const PORT = process.env.PORT || 2020;

//Set up MiddleWare
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Router
require("./public/apiRoutes")(app);
require("./public/htmlRoutes")(app);

//Listening on localhost:2020
app.listen(PORT, () => {
  console.log("listening on localhost:" + PORT);
});
