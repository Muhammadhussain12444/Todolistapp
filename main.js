import inquirer from "inquirer";
let todos = ["Hussain", "Zarar"];
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "select an operation",
            name: "select",
            choices: ["Add", "Update", "View", "Delete",]
        });
        if (ans.select == "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add items in the list",
                name: "todo",
            });
            todos.push(addTodo.todo);
            console.log(todos);
        }
        // update basically work ye he k Name ko replace krta he 
        if (ans.select == "Update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "Update items in the list",
                name: "todo",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add items in the list",
                name: "todo",
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            console.log(todos);
        }
        if (ans.select == "View") {
            console.log("*** TO DO LIST ***");
            console.log(todos);
            console.log("***********************");
        }
        if (ans.select == "Delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "Update items in the list",
                name: "todo",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodo];
            console.log(todos);
        }
    } while (true);
}
createTodo(todos);
