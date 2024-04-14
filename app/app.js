document.getElementById("formulaire-liste").addEventListener("submit", (e) => {
  e.preventDefault();
  const list = document.getElementById("nouvelle-liste").value;
  var myToDoList = new List(list);
  document.getElementById("nouvelle-liste").value = "";
  myToDoList.displayList();
});

document.getElementById("formulaire-tache").addEventListener("submit", (e) => { 
  e.preventDefault();
  const tache = document.getElementById("nouvelle-tache").value;
  myToDoList.taskManager.addTask(tache);
  myToDoList.taskManager.displayTask();
});
