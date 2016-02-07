(function(){
    var directoryNameList= angular.module("directoryNameList",[])
    directoryNameList.directive("nameList",function(){
        return{
            controller:"nameDirectoryController",
            restrict:'E',
            templateUrl:"/bestcarehealthcenter/namedirectory/templates/namelist.html"
        }
    })
})();