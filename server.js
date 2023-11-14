const inquire = require('inquirer');
const connection = require('./config/connection');

function start() {
    inquirer.prompt([
        {
            name: 'choices',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'Add a department',
                'View all roles',
                'Add a role',
                'View all employees',
                'Add an employee',
                'Update an employee role',
            ],
        }
    ])
    .then((response))
}