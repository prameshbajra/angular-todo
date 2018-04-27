const app = angular.module("todo",[]);

app.controller("IndexController",($scope) => {
  $scope.appTitle = "ToDO Application";
  $scope.todoArray = [
    "Somethign",
    "Will", "Be", "Here"
  ];
});
