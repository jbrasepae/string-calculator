const {add} = require("../src/string_calculator")

describe('add', function(){
    it('should return 0 for an empty string',function(){
        expect(add("")).toBe(0)
    })
    it('should input one number as a string',function(){
        expect(add("1")).toBe(1)
    })
    it('should input two numbers as a string',function(){
        expect(add("1,1")).toBe(2)
    })
    it('should input multiple numbers as a string',function(){
        expect(add("1,2,3,4")).toBe(10)
    })
})
