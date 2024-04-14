class List{
  constructor(title) {
    this.title = title;
    this.taskManager = new Task();
  }

  displayList() {
    console.log(`${this.title.toUpperCase()}`);
  }
}