"use strict"
app.controller ("ItemNewCtrl", function($scope, ItemStorage, $location){
  $scope.newtask ={
    assignedTo:"",
    dependencies: "",
    dueDate: "",
    isCompleted: "false",
    location:"",
    task:"",
    urgency:"normal"
  };

$scope.addNewItem = function(){
  ItemStorage.postNewItem($scope.newTask)
  .then(function(){
    $location.url("/items/list");
  });
 };
});
