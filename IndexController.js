const app = angular.module("todo",[]);

app.controller("IndexController",($scope) => {
  $scope.appTitle = "To Do Application";
  $scope.todoArray = [
    "Somethign",
    "Will", "Be", "Here"
  ];
});
