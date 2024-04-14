
//************* List ************;
class List {
  constructor(title) {
    this.title = title;
    this.taskManager = new Task();
  }
  
  displayList() {
    console.log(`Liste: ${this.title}`);
  }
}

// **************Task*****************
class Task {
  constructor(tasks) {
    this.tasks = [];
  }
  addTask(task) {
    this.tasks.push(task);
  }
  removeTask(index) {
    this.splice(index, 1);
  }
  displayTasks() {
    this.tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
}
  
//************* App *************
  
const myToDoList = new List("Ma liste de tâches");
// Ajouter des tâches à la liste
myToDoList.taskManager.addTask("Coder mon port folio");
myToDoList.taskManager.addTask("Héberger mon portfolio");

myToDoList.displayList();
// Afficher les tâches de la liste
myToDoList.taskManager.displayTasks();
  
  
  
  