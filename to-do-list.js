document.addEventListener("DOMContentLoaded", function(event) { 
    var btn = document.getElementById("button");
    var input = document.getElementById("inputField");
    var listOfTasks = document.getElementById("list");
    var date = document.getElementById("duedate");


    btn.addEventListener("click", function(){ 

        document.getElementsByTagName("p")[0].classList.remove("hidden");

        var task = document.createElement("li");
        task.textContent = input.value + " | " + date.value;
        listOfTasks.appendChild(task);

        task.addEventListener("click", function(){this.remove();})
    })

});