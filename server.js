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

//Get htmlRoutes
//Should return the index.html file.
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
//Should return the notes.html file.
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

//Returns to index.html
app.get("*", (req, res) => {
  res.redirect("/");
});

//Get apiRoutes should should read the db.json file and return all saved notes as JSON.
app.get("/api/notes", (req, res) => {
  return res.json.parse(fs.readFileSync("./db/db.json", "utf-8"));
});

//Post apiRoutes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
app.post("/api/notes", (req, res) => {});

//Delete Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

app.delete("/api/notes/:id", (req, (res) => {}));

//Listening on localhost:2020
app.listen(PORT, () => {
  console.log("listening on localhost:" + PORT);
});
