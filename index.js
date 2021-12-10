// link to HTML page creation 

// link to employee profiles 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// node modules 
const fs = require('fs');
const inquirer = require('inquirer')
const validator = require('email-validator');

// team array 
const teamArray = [];

// start of manager prompt 
const addManager = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Who is the manager of this team?',
                validate: nameInput => {
                    if(nameInput){
                        return true;
                    } else{
                        console.log("Please enter the manager's name.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the Manager's Id.",
                validate: idInput => {
                    if(isNaN(idInput)){
                        console.log("Please enter the manager's ID!")
                        return false;
                    } else{
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the manager's email.",
                validate: emailInput => {
                    if(validator.validate(emailInput)){
                        return true;
                    } else{
                        console.log("Please enter a valid email address!")
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Please enter the manager's office number.",
                validate: officeNumberInput => {
                    if(isNaN(officeNumberInput)){
                        console.log("Please enter the manager's office number!");
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        ])
        .then (managerInput => {
            const {name , id , email, officeNumber } = managerInput;
            const manager = new Manager (name, id, email, officeNumber);
            teamArray.push(manager);
            console.table(manager);
        })
}

addManager();