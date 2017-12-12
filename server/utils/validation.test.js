const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', ()  => {
       var value = 123;
       var response = isRealString(value);
        expect(response).toBe(false);
    });

    it('should reject string with only spaces', ()  => {
        var value = "   ";
        var response = isRealString(value);
         expect(response).toBe(false);
     });

     it('should reject string with only spaces', ()  => {
        var value = "asdasd";
        var response = isRealString(value);
         expect(response).toBe(true);
     });
});