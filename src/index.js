var app = angular.module('Todo', [])
app.controller('MainController',function ($scope){
  $scope.title = 'Angular is pretty cool.';
  $scope.todos = [
      { title: "Eat", discription: "have to do this task by today"},
      { title: "Sleep the grass", discription: "have to do this task by today"},
      { title: "Exercise", discription: "have to do this task by today"},
      { title: "Work", discription: "have to do this task by today"}
  ];

  $scope.addToDo = function(){
    $scope.item.push({title: 'Hi', discription: 'hi', status: false});
  };
  $scope.deleteTodo = function(todo) {
    var todoIndex = $scope.todos.indexOf(todo);
    if (todoIndex >= 0) {
      $scope.todos.splice(todoIndex, 1);
    }
  };
  $scope.editTodo = function() {
    // scope.editMode = true;
    // previousValue = scope.model;
    //
    // $timeout(function() {
    //   elm.find('input')[0].focus();
    // }, 0, false);
  };

  $scope.add = function(e) {
    if (e.which && e.which === 13) {
      $scope.todos.push($scope.newTodo);
      $scope.newTodo = '';
    }
  };
});
