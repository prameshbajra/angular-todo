const app = angular.module("todo",[]);

app.controller("IndexController",($scope) => {
  $scope.appTitle = "To Do Application";
  $scope.todoArray = [
    {
      task:"Something",
      date:new Date(),
      desc:"Something to describe"
    },
    {
      task:"just",
      date:new Date(),
      desc:"like this  to describe"
    },
    {
      task:"by",
      date:new Date(),
      desc:"maroon 5"
    }
  ];
});
