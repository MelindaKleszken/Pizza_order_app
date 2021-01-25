//make pizza order app

//welcome text: Welcome to Spicy Pizza app. 
//question 1: Size of pizza? - small medium large, family ( 6/ 10/ 14/ 16)
//question 2: vegan/ vegetarian/ omnivore. -- if any hide corresponding items
//question 3: base? tomato / bbq / white sauce
//question 4: cheese: vegan/ mozzarella
//question5: toppings: pepperoni, ham, bacon, tuna, sweetcorn, pineapple, mushrooms, oninons, red pepper (1.6 each)
//question 6: extra dipping? ketchup/ spicy sauce/ herb oil

//at the end print the whole order with all the selected items listed. -- "You ordered a .....pizza. Total to pay:.... 
//At exit: --If really hungry, plase call Domino's to place a real order :)"


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
    allNotes.push({order: myNote});
    console.log(
        chalk.green(`
      Added new note: ${myNote}
      `)
      );
    saveNotes(allNotes);
};

const saveNotes = allNotes => {
    const notesJson = JSON.stringify(allNotes);
    fs.writeFileSync("src/notes.json", notesJson);
};

const listNotes = () => {
    const allNotes = loadNotes();
    allNotes.map((note, index) => {
        console.log(`${index + 1}. ${note.order}`);
    });
};

const removeNote = (noteToDelete) => {
    const allNotes = loadNotes();

    try {
        const removedItem = allNotes.splice(noteToDelete - 1, 1);
        console.log(`
        succesfully removed ${removedItem[0].order}
        `);
    } catch (error) {
        console.log(chalk.red('number out of range'));
    }

    saveNotes(allNotes);
};

module.exports = {
    addNote,
    listNotes,
    removeNote
};