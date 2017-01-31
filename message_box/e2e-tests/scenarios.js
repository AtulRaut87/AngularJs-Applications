describe("Message Box Application", function(){
    
    describe("Message Box Message List", function(){
        
        beforeEach(function(){
            browser.get("index.html");
        });
        
        it("load meesage list page and by default messages loaded should be 7", function(){
           var messageList = element.all(by.repeater('message in $ctrl.messages'));
            expect(messageList.count()).toBe(7);
        });
        
    });
    
});