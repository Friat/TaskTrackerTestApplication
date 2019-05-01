 var toPopulate = [{
    "name": "Test Task #1",
    "date": "12/01/2012",
    "assigned": "John Doe"
  }, {
    "name": "Test Task #2",
    "date": "12/02/2012",
    "assigned": "John Doe"
  }, {
    "name": "Test Task #3",
    "date": "12/03/2012",
    "assigned": "John Doe"
  }, {
    "name": "Test Task #4",
    "date": "12/04/2012",
    "assigned": "John Doe"
  }, {
    "name": "Test Task #5",
    "date": "12/05/2012",
    "assigned": "John Doe"
  }, {
    "name": "Test Task #6",
    "date": "12/06/2012",
    "assigned": "John Doe"
  }, {
    "name": "Test Task #7",
    "date": "12/07/2012",
    "assigned": "John Doe"
  }];

  function pageLoad(toPopulate) {
    toPopulate.forEach(function(task) {
      var taskItem = "<div class='task-item'><h4 class='task-name'>" + task.name + "</h4><h4 class='task-date'>" + task.date + "</h4><h4 class='task-assigned'>" + task.assigned + "</h4></div>";
      $(".task-wrapper").prepend(taskItem);
    });
  };

function addTask(){
  var name = $(".name").val();
  var date = getFormatedDate($(".date").val());
  var assigned = $(".assigned").val();
  var taskItem = "<div class='task-item'><h4 class='task-name'>" + name + "</h4><h4 class='task-date'>" + date + "</h4><h4 class='task-assigned'>" + assigned + "</h4></div>";
  $(".task-wrapper").prepend(taskItem); 
};

  function getFormatedDate(date){
    var dateElements = date.split("-");
    var day = dateElements[2];
    var month = dateElements[1];
    var year = dateElements[0];

    return month + "/" + day + "/" + year;
  };
  
$(document).ready(function() {
 
  pageLoad(toPopulate);
  
  $("#task").on('submit',function(event){
   event.preventDefault();
        addTask();
  });

});