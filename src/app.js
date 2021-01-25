//make pizza order app

//welcome text: Welcome to Spicy Pizza app. 
//question 1: Size of pizza? - small medium large, family ( 6/ 10/ 14/ 16)
//question 2: vegan/ vegetarian/ omnivore. -- if any hide corresponding items
//question 3: base? tomato / bbq / white sauce
//question 4: cheese: vegan/ mozzarella
//question 5: toppings: pepperoni, ham, bacon, tuna, sweetcorn, pineapple, mushrooms, oninons, red pepper (1.6 each)
//question 6: extra dipping? ketchup/ spicy sauce/ herb oil
//question 7: add notes

//at the end print the whole order with all the selected items listed. -- "You ordered a .....pizza. Total to pay:.... 
//At exit: --If really hungry, plase call Domino's to place a real order :)"


const figlet = require('figlet');
const inquirer = require('inquirer');
const chalk = require('chalk');
const dateTime = require('date-time');
const {addNote, listNotes, removeNote} = require("../utils/notes");


const topLevelQuestion = [
    { type: "list",
    name: "options",
    message: "The size of your pizza?",
    choices: ["small", "medium", "large", "family"] }
]; 


const pizzaType = [
    { type: "list",
    name: "type",
    message: "Would you like a vegan/ vegetarian/ omnivore pizza",
    default: "omnivore",
    choices: ["vegan", "medium", "vegetarian", "omnivore"] 
    }
];

const baseType = [
    {type: "checkbox",
    name:"base",
    message: "What base sauce do you prefer?",
    default: "tomato",
    choices: ["tomato", "BBQ", "white sauce"] 
    }
];

const cheeseType = [
    {type: "list",
    name: "cheese",
    message: "Select your prefered cheese..",
    choices: ["mozzarella", "vegan cheese", "no cheese, please"] 
    }
];

const toppings = [
    {type: "checkbox",
    name: "toppings",
    message: "Select your prefered toppings. £1.60 eaach",
    choices: ["mozzarella", "vegan cheese", "no cheese, please"] 
    }    
];

const extraSauce = [
    {type: 'confirm',
    name:'sauce', 
    message:'Would you like extra sauce',
    }
];
const wantSauce = [
    {type: "checkbox",
    name: "extraSauce",
    message: "Select your extra sauce. £1.60 eaach",
    choices: ["mozzarella", "vegan cheese", "no cheese, please"] 
    }    
];

const addComments = [
    {type: 'input',
    name:'comments', 
    message:'Please add delivery address'
    }
];

const removeItem= [
    {type: 'number',
    name:'remove', 
    message:'what would you like to remove? Please type a number'
    }
]

const main = () => {
    console.log(chalk.blue(figlet.textSync('Notes App', {
    width: 80})));
    app();
};


const app = async () => {
    const answers = await inquirer.prompt(topLevelQuestion);
    if (answers.options == "add") {
        const answer = await inquirer.prompt(addQuestion);
        addNote(answer.add);

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

main();