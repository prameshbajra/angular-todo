const app = angular.module("todo", []);

app.controller("IndexController", ($scope) => {
    $scope.appTitle = "To Do Application";
    $scope.todoArray = [
        {
            task: "Something",
            date: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
            desc: "Something to describe"
        },
        {
            task: "just",
            date: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
            desc: "like this  to describe"
        },
        {
            task: "by",
            date: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
            desc: "maroon 5"
        },
        {
            task: "by",
            date: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
            desc: "maroon 5"
        },
        {
            task: "by",
            date: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
            desc: "maroon 5"
        }
    ];
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
