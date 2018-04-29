const app = angular.module("todo", ["ngRoute"]);

app.controller("IndexController", ($scope) => {
    $scope.appTitle = "To Do Application";
    $scope.todoArray = [];
    $scope.addTask = false;
    $scope.addItem = (item) => {
        $scope.todoArray.push(item);
    }
    $scope.toggleAddTask = () => {
        $scope.addTask = !$scope.addTask;
    }
    $scope.addTask = (task, desc) => {
        const item = {
            task,
            desc,
            date: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        }
        $scope.todoArray = $scope.todoArray.push(item);
    }
    $scope.remove = (todoIndex) => {
        $scope.todoArray.splice(todoIndex, 1);
    }
    $scope.edit = (todoIndex) => {
        $scope.todoItem = $scope.todoArray[todoIndex];
    }
    $scope.saveEdit = (index, todoItemTask, todoItemDesc) => {
        $scope.todoArray.splice(index, 1);
        $scope.todoArray[index] = {
            task: todoItemTask,
            desc: todoItemDesc,
            date: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        }
    }
});
