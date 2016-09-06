"use strict"
app.controller ("EditItemCtrl", function($scope, ItemStorage, $location, $routeParams){
  $scope.newtask ={
    assignedTo:"",
    dependencies: "",
    dueDate: "",
    isCompleted: "",
    location:"",
    task:"",
    urgency:""
  };

$scope.editItem = function(){
  ItemStorage.getSingleItem($scope.newTask)
  .then(function(data){
    $location.url("#/items/{{item.id}}");
  });
 };
$scope.updateItem = function(){
  ItemStorage.putItem($routeParams.itemId. $scope.editTask);
  };
$scope.editItem();
});

