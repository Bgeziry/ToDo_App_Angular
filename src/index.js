angular.module('Todo', [])
  .controller('MainController',function ($scope, $http){
    //$scope.title = 'Angular is pretty cool.';
    $scope.addToDo = function(e){
      if (e.which && e.which === 13) {
        $scope.todo_item.push($scope.todo_item);
      }
    };

    $scope.deleteTodo = function(todo) {
      var todoIndex = $scope.todo_item.indexOf(todo);
      if (todoIndex >= 0) {
        $scope.todo_item.splice(todoIndex, 1);
      }
    };

    $scope.editTodo = function() {

    };

    $scope.getTodoitems = function() {
      $http.get('http://localhost:3000/todo_item.json')
        .then(function(success){
          $scope.todo_item = success.data;
          console.log($scope.todo_item);
        }, function(error){
          toastr.error('Failed to retrieve todo_item', "ERROR!");
        });
    }
    $scope.getTodoitems()
    // $scope.add = function(e) {
    //   if (e.which && e.which === 13) {
    //     $scope.todos.push($scope.newTodo);
    //     $scope.newTodo = '';
    //   }
    // };
});
