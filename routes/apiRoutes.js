//Dependencies
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

module.exports = function (app) {
  //GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
  app.get("/api/notes", (req, res) => {
    return res.json(JSON.parse(fs.readFileSync("./db/db.json", "utf-8")));
  });

  // POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
  app.post("/api/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
    notes.push({
      id: uuidv4(),
      title: req.body.title,
      text: req.body.text
    });
    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    res.json(true);
  });

  //DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
  app.delete("/api/notes/:id", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
    const newNotes = notes.filter((note) => note.id !== req.params.id);
    fs.writeFileSync("./db/db.json", JSON.stringify(newNotes));
    res.json(true);
  });
};
