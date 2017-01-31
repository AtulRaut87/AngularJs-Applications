angular.module("messageList")
.component("messageList",{
   templateUrl: "/messagelist/messagelist.template.html",
   controller: ['$http', function MessageListController($http){
                   self=this;
               
                   $http.get('/messagelist/messages.json').then(function(response){
                        self.messages=response.data;
                   });
               
               }
               ]
});