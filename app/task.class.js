class Task{
  constructor() {
    this.tasks = [];
  }
  addTask(task) {
    this.tasks.push(task);
  }
  removeTask(index) {
    this.tasks.splice(index, 1);
  }
  countTask() {
    console.log(this.tasks.length);
  }
  displayTask() {
    this.tasks.forEach((task, index) => {
      console.log(`${index+1}.${task}`);
    });
  }
}