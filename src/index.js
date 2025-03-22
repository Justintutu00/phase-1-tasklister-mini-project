document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const newTask = document.createElement("li");
      newTask.textContent = taskText;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "❌";
      deleteButton.style.marginLeft = "10px";
      deleteButton.addEventListener("click", function () {
        newTask.remove();
      });

      newTask.appendChild(deleteButton);
      taskList.appendChild(newTask);

      taskInput.value = "";
    }
  });

  const animeTasks = [
    "Watch Jujutsu Kaisen Episode 24",
    "Read One Piece Chapter 1100",
    "Finish Demon Slayer Season 4",
    "Rewatch Attack on Titan: Final Season",
    "Start Vinland Saga",
    "Buy My Hero Academia manga Vol. 32"
  ];

  animeTasks.forEach(task => {
    const newTask = document.createElement("li");
    newTask.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.style.marginLeft = "10px";
    deleteButton.addEventListener("click", function () {
      newTask.remove();
    });

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
  });
});
