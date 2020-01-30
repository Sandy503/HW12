const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = require("./connection");
const cTable = require('console.table');


const viewEmployees = () => {
    connection.query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name, concat(e2.first_name,' ', e2.last_name) AS manager FROM employee JOIN role ON (employee.role_id = role.id) JOIN department ON (role.department_id = department.id) LEFT JOIN employee e2 on employee.manager_id = e2.id;",
        (err, res) => {
          if (err) throw err;
          console.table(res);
          init();
        } 
    )
};

const viewDepartments = () => {
    connection.query(
        "SELECT * FROM employees.department;", (err, res) => {
            if (err) throw err;
            console.table(res);
            init();
        }
    )
};

const viewRoles = () => {
    connection.query(
        "SELECT role.title, role.salary, department.name FROM employees.role JOIN employees.department ON (role.department_id = department.id);", (err, res) => {
            if (err) throw err;
            console.table(res);
            init();
        }
    )
};

const addEmployee = () => {
    inquirer.prompt([
          {
            type: "input",
            name: "firstName",
            message: "What is the new employees first name?"
          },
          {
            type: "input",
            name: "lastName",
            message: "What is their last name?"
          },
          {
            type: "list",
            name: "employeeRole",
            message: "What is their role?",
            choices: 
          },
          {
            type: "list",
            name: "manager",
            message: "Who is their Manager?",
            choices: 
          }
        ]).then(
            
        )
    
};

module.exports = {
    viewEmployees,
    viewDepartments,
    viewRoles,
    addEmployee
}