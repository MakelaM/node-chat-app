var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', ()  => {
       var from = "admin";
       var text = "Some message";
       
        var response = generateMessage(from, text);
        expect(response.createdAt).toBeA('number');
        expect(response).toInclude({
            from, 
            text
        });
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', ()  => {
        var from = "admin";
        var url = 'https://www.google.com/maps?q=62.78806389999999,22.8213741';
        var message = generateLocationMessage(from, "62.78806389999999", "22.8213741");
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from, 
            url
        });
    });
});