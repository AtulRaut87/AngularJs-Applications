describe("MessageList", function(){
    
    beforeEach(module('messageList'));
    
    describe("controller", function(){
        var $httpBackend, ctrl
        beforeEach(inject(function($componentController, _$httpBackend_){
            $httpBackend=_$httpBackend_;
            $httpBackend.expectGET('/messagelist/messages.json')
                        .respond([{"subject" : "Subject1"}, {"subject" : "Subject2"}]);
            ctrl=$componentController("messageList");
        }));
        
        it("should create message list with two messages using $http", function(){
           //expect(ctrl.messages).toBeUndefined();
            $httpBackend.flush();
            expect(ctrl.messages).toEqual([{"subject" : "Subject1"}, {"subject" : "Subject2"}]);
        });
    });
});