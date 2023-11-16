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

            case 'View all roles':
            viewRoles();
            break;

            case 'View all employees':
            viewEmployees();
            break;

            case 'Add a department':
            addDepartment();
            break;

            case 'Add a role':
            addRole();
            break;

            case 'Add an employee':
            addEmployee();
            break;

            case 'Update an employee role':
            updateEmployee();
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
        console.table(result);
        start();
    })
};


function viewRoles() {
    let sql = 'SELECT title, department_id FROM role';
    db.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        console.table(result);
        start();
    })
};


function viewEmployees() {
    let sql = 'SELECT first_name, last_name, role_id, manager_id FROM employee';
    db.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        console.table(result);
        start();
    })
};


function addDepartment() {
    inquirer.prompt([
        {
            name: 'addDepartment',
            type: 'input',
            message: 'What is the name of the new department?',
        }
    ])
    .then((response) => {
        let sql = 'INSERT INTO department(name) VALUES (?)';
        let addedDb = response.addDepartment;
        db.query(sql, addedDb, (err, result) => {
            if(err){
                console.log(err);
            }
            console.log(`${addedDb} added to database`);
            viewDepartments();
        })
    })
};


function addRole() {
    inquirer.prompt([
        {
            name: 'addRole',
            type: 'input',
            message: 'What is the name of the new role?',
        }
    ])
    .then((response) => {
        let sql = 'INSERT INTO role(name) VALUES (?)';
        let addedDb = response.addRole;
        db.query(sql, addedDb, (err, result) => {
            if(err){
                console.log(err);
            }
            console.log(`${addedDb} added to database`);
            viewRoles();
        })
    })
};


function addEmployee() {
    inquirer.prompt([
        {
            name: 'firstname',
            type: 'input',
            message: 'What is the FIRST NAME of the new employee?',
        },
        {
            name: 'lastname',
            type: 'input',
            message: 'What is the LAST NAME of the new employee?',
        },
        {
            name: 'roleid',
            type: 'input',
            message: 'What is the ROLE ID of the new employee?',
        },
        {
            name: 'managerid',
            type: 'input',
            message: 'What is the MANAGER ID of the new employee?',
        }
    ])
    .then((response) => {
        let sql = `INSERT INTO employee(first_name, last_name, role_id, manager_id ) VALUES (?, ?, ?, ?)`;
        let addedDb = [response.firstname, response.lastname, response.roleid, response.managerid];
        db.query(sql, addedDb, (err, result) => {
            if(err){
                console.log(err);
            }
            console.log(`${addedDb} added to database`);
            viewEmployees();
        })
    })
};

function updateEmployee() {
    inquirer.prompt([
        {
            name: 'employeeid',
            type: 'input',
            message: 'What is the EMPLOYEE ID of the updated employee?',
        },
        {
            name: 'firstname',
            type: 'input',
            message: 'What is the FIRST NAME of the updated employee?',
        },
        {
            name: 'lastname',
            type: 'input',
            message: 'What is the LAST NAME of the updated employee?',
        },
        {
            name: 'roleid',
            type: 'input',
            message: 'What is the ROLE ID of the updated employee?',
        },
        {
            name: 'managerid',
            type: 'input',
            message: 'What is the MANAGER ID of the updated employee?',
        }
    ])
    .then((response) => {
        let targetedId = response.employeeid;
        let sql = `INSERT INTO employee(id, first_name, last_name, role_id, manager_id ) WHERE id = ${targetedId} VALUES (?, ?, ?, ?, ?)`;
        let addedDb = [response.employeeid, response.firstname, response.lastname, response.roleid, response.managerid];
        db.query(sql, addedDb, (err, result) => {
            if(err){
                console.log(err);
            }
            console.log(`${addedDb} added to database`);
            viewEmployees();
        })
    })
};






start();






// // Query database
// let deletedRow = 2;

// db.query(`DELETE FROM favorite_books WHERE id = ?`, deletedRow, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });