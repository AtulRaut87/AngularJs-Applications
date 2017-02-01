angular.module("messageDetails")
        .component("messageDetails",{
        
        templateUrl:"/messagedetails/messagedetails.template.html",
        controller: ['$http', function($http){
                this.message="this is awesome";
            }]
        });