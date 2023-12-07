const readline = require("readline")
const { tasks, addTask, removeTask, completeTask, listTasks } = require("./todo.js")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const main = () => {
  console.log("Welcome to Todo CLI! \n-------------------- \n")
  prompt()
}

const displayTasks = () => {
  if (tasks.length > 0) {
    listTasks()
    console.log("\n")
  }
}

const prompt = () => {
  displayTasks()
  console.log("What would you like to do?")
  console.log("1. Add a task")
  console.log("2. Remove a task")
  console.log("3. Mark a task as complete")
  console.log("4. Quit")

  rl.question("> ", (answer) => {
    switch (answer) {
      case "1":
        rl.question("What do you wanna do? ", (answer) => {
          addTask(answer)
          prompt()
        })
        break

      case "2":
        rl.question("Which task would you want to remove? ", (answer) => {
          removeTask(answer)
          prompt()
        })
        break

      case "3":
        rl.question("Which task would you want to complete? ", (answer) => {
          completeTask(answer)
          prompt()
        })
        break

      case "4":
        rl.close()
        break

      default:
        console.log("Invalid input")
        prompt()
    }
  })
}

main()
