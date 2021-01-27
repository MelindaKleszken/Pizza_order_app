//make pizza order app

//welcome text: Welcome to Spicy Pizza app. 
//question 1: what would you like to do?
//question 2: Size of pizza? - small medium large, family ( 6/ 10/ 14/ 16)
//question 2: Type of pizza: vegan/ vegetarian/ omnivore. -- if any hide corresponding items
//question 3: delivery or pickup?
//question 4: If delivery, add adrdress


//at the end print the whole order with all the selected items listed. -- "You ordered a .....pizza. Total to pay:.... 
//At exit: --If really hungry, plase call Domino's to place a real order :)"


const figlet = require('figlet');
const inquirer = require('inquirer');
const chalk = require('chalk');
const dateTime = require('date-time');
const {addNote, listNotes, removeNote, saveNotes} = require("../utils/notes");


const topLevelQuestion = [
    { type: "list",
    name: "options",
    message: "What would you like to do?",
    choices: ["order", "list", "remove", "exit"] }
]; 

const sizeQuestion = [
    { type: "checkbox",
    name: "size",
    message: "What size should have your pizza",
    choices: ["small", "medium", "large", "family"] }
]; 

const typeQuestion = [
    {type: "list",
    name: "type",
    message: "What type of pizza would you like",
    choices: ["Margherita (vegetarian)", "Diavola (Spicy)", "Pescha (pescatarian)", "Primavera (vegan)", "Quattro Stagioni"]
    }
];
const deliveryQuestion = [
    {type: 'confirm',
    name: "delivery",
    message: "Is this for delivery?"
    }
];

const addAddress = [
    {type: 'input',
    name:'address', 
    message:'Please add delivery address: '
    }
];

const main = () => {
    console.log(chalk.blue(figlet.textSync('Welcome to Pizza Order App', {
    width: 80})));
    app();
};

const app = async () => {
    const answers = await inquirer.prompt(topLevelQuestion);
    if (answers.options == "order") {
        const answer = await inquirer.prompt(typeQuestion);
        addNote(answer.type);

        app();
    } else if (answers.options == "list") {
        listNotes();
        app() ;

    } else if (answers.options == "remove") {
        listNotes()
        const answer = await inquirer.prompt(removeQuestion);
        removeNote(answer.remove);
        app() ;

    } else if (answers.options == "exit") {
        console.log("ok, bye!");
    }
};

main();
/*const app = async () => {
    const answers = await inquirer.prompt(topLevelQuestion);
    if (answers.options == "add") {

        const answer = await inquirer.prompt(sizeQuestion);
        saveNotes(answer.add);
        if (answer.size == "small"|| answer.size == "medium"|| answer.size == "large"|| answer.size =="family") {
            addNote(answer.size,1);

            const answer = await inquirer.prompt(typeQuestion);
            if (answer.type == "Margherita (vegetarian)" || answer.type == "Diavola (Spicy)"|| answer.type== "Pescha (pescatarian)"|| answer.type == "Primavera (vegan)" || answer.type == "Quattro Stagioni") {
                addNote(answer.type);

                const answer = await inquirer.prompt(deliveryQuestion);
                if (true) {
                    const answer = await inquirer.prompt(addAddress);
                    addNote(answer.address); 
                } else {
                    console.log("local pickup");
                };
                app();
            };

        };
            

        

        app();
        
    } else if (answers.options == "list") {
        listNotes();
        app() ;

    } else if (answers.options == "remove") {
        listNotes()
        const answer = await inquirer.prompt(removeItem);
        removeNote(answer.remove);
        app() ;

    } else if (answers.options == "exit") {
        console.log("ok, bye!");
    }
};

main();*/