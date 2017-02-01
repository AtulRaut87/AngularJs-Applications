describe("MessageList", function(){
    
    beforeEach(module('messageList'));
    
    describe("controller", function(){
        var $httpBackend, ctrl
        beforeEach(inject(function($componentController, _$httpBackend_){
            $httpBackend=_$httpBackend_;
            $httpBackend.expectGET('/messagelist/messages.json')
                        .respond([      {
                                        "messgeid" : 1,
                                        "from" : "Atul",    
                                        "subject" : "subject 1",
                                        "datetime" : "12:00 pm",
                                        "message" : "This message 1"
                                        },
                                        {
                                        "messgeid" : 2,
                                        "from" : "Vipul",
                                        "subject" : "subject 2",
                                        "datetime" : "10:00 pm",
                                        "message" : "This message 2"
                                        }
                                ]);
            ctrl=$componentController("messageList");
        }));
        
        it("should create message list with two messages using $http", function(){
           //expect(ctrl.messages).toBeUndefined();
            $httpBackend.flush();
            expect(ctrl.messages).toEqual([      {
                                        "messgeid" : 1,
                                        "from" : "Atul",    
                                        "subject" : "subject 1",
                                        "datetime" : "12:00 pm",
                                        "message" : "This message 1"
                                        },
                                        {
                                        "messgeid" : 2,
                                        "from" : "Vipul",
                                        "subject" : "subject 2",
                                        "datetime" : "10:00 pm",
                                        "message" : "This message 2"
                                        }
                                ]);
        });
        
        
    });
});