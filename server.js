const inquirer = require("inquirer");
const mysql = require("mysql")
const mainFunctions = require("./lib/mainFunctions")
const connection = require("./lib/connection")

connection.connect();

  init = () => {
    console.log("\n");
    console.log("Welcome to The Employee Database Manager!");
    inquirer.prompt([
        {
            type: "list",
            name: "mainMenu",
            message: "What would you like to do?",
            choices: ["View Employees", "View Departments", "View Roles", "Add Employee", "Add Department", "Add Role", "Update Employee Role", "Quit"]
        }
    ]).then(response => {
        switch (response.mainMenu){
            case "View Employees" : mainFunctions.viewEmployees();
            break;

            case "View Departments" : mainFunctions.viewDepartments();
            break;

            case "View all roles": mainFunctions.viewRoles();
            break;

            case "Add employee" : mainFunctions.addEmployee();      
            break;

            case "Add department" : mainFunctions.addDepartment();
            break;

            case "Add role" : mainFunctions.addRole();
            break;   

            case "Update employee role" : mainFunctions.updateRole();
            break;
        
            case "Quit":
            console.log("Ending Session...")
            connection.end();
        }
        
    }
)};

init();