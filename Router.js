app.config(($routeProvider) => {
    $routeProvider
        .when("/addTask", {
            templateUrl: "./templates/AddTask.html"
        })
    // .otherwise({
    //     templateUrl: "./index.html"
    // });
});