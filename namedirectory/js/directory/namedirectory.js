(function(){
var nameDirectory=angular.module("namedirectory",["directoryNameList"]);
    
nameDirectory.controller("nameDirectoryController",function($scope, $http){
    this.name='';
    $http.get("/bestcarehealthcenter/namedirectory/data/personlist.json")
    .then(function(response) {
        $scope.persons = response.data.Persons;
    });
     
});
    



})();