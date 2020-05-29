//Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
const uuid = require("uuid");

//Set Up Express App
const app = express();
const PORT = process.env.PORT || 2020;

//Set up MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//htmlRoutes
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "notes.html"));
});

//apiRoutes
app.get("/api/notes", function (req, res) {
  return res.json(notes);
});

//Listen on localhost:2020
app.listen(PORT, () => {
  console.log("listening on localhost:" + PORT);
});
