const fs = require("fs");
const chalk = require('chalk');

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("src/notes.json");
        const notesJson = dataBuffer.toString();
        return JSON.parse(notesJson);
    } catch (error) {
        return [];
    }
};

const addNote = (myNote)=> {
    const allNotes = loadNotes();
    allNotes.push({name: myNote});
    console.log(
        chalk.green(`
      Added new note: ${myNote}
      `)
      );
    saveNotes(allNotes);
};

const saveNotes = (allNotes) => {
    const notesJson = JSON.stringify(allNotes);
    fs.writeFileSync("src/notes.json", notesJson);
};

const listNotes = () => {
    const allNotes = loadNotes();
    allNotes.map((note, index) => {
        console.log(`${index + 1}. ${note.name}`);
    });
};

const removeNote = (noteToDelete) => {
    const allNotes = loadNotes();

    try {
        const removedItem = allNotes.splice(noteToDelete - 1, 1);
        console.log(`
        succesfully removed ${removedItem[0].name}
        `);
    } catch (error) {
        console.log('number out of range')
    }

    saveNotes(allNotes);
};

module.exports = {
    addNote,
    listNotes,
    removeNote,
    saveNotes
};