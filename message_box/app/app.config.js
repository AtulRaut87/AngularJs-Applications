'use strict';
angular.module('messageBoxApp')
        .config(['$locationProvider','$routeProvider', function($locationProvider,$routeProvider){
                    $locationProvider.hashPrefix('!');
                    
                    $routeProvider
                            .when('/inbox/messages',{
                            template: "<message-list></message-list>"
                            })
                            .when('/inbox/messages:messageId', {
                            template: "<message-details></message-details>"
                            })
                            .otherwise('/inbox/messages');
        }]);