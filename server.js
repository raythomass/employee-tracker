const inquirer = require('inquirer');
const db = require('./config/connection');

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
    .then((response) => {
        switch (response.choices){
            case 'View all departments':
                viewDepartments();
                break;
        }
    })
};

function viewDepartments() {
    let sql = 'SELECT id, name FROM department';
    db.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        console.log(result);
    })
};


start();