const tasks = []

const addTask = (task) => {
  tasks.push({
    task: task,
    completed: false,
  })
}

const removeTask = (index) => {
  tasks.splice(index - 1, 1)
}

const completeTask = (index) => {
  tasks[index - 1].completed = true
}

const tasksList = () => {
  tasks.forEach((task, index) => {
    console.log(`${index + 1}.`, task.completed ? "✅" : "🔳️", task.task)
  })
}

module.exports = { addTask, removeTask, completeTask, tasks, listTasks: tasksList }
