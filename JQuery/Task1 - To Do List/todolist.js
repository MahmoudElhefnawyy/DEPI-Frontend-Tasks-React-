$(document).ready(function () {
    $(document).on("click", ".done", function () {
      $(this).closest(".task").find(".task-text").toggleClass("checked");
    });
  
    $(document).on("click", ".del", function () {
      $(this)
        .closest("li.task")
        .fadeOut(200, function () {
          $(this).remove();
        });
    });
  
    $(document).on("click", ".edit", function () {
      const taskElement = $(this).closest(".task").find(".task-text");
      const currentText = taskElement.text();
      const newText = prompt("Edit task:", currentText);
      
      if (newText !== null && newText.trim() !== "") {
        taskElement.text(newText.trim());
      }
    });
  
    //Add New Task
    $("form").on("submit", function (e) {
      e.preventDefault();
  
      let taskValue = $("#enter-task").val().trim();
  
      if (taskValue === "") {
        alert("enter new task");
        return;
      }
  
      let newTask = `
        <li class="task">
            <p class="task-text">${taskValue}</p>
            <div class="actions">
              <button class="done">Done</button>
              <button class="edit">Edit</button> <!-- Added Edit button -->
              <button class="del">Del</button>
            </div>
          </li>
      `;
  
      $(".tasks").append(newTask);
  
      $("#enter-task").val(""); 
    });
  });