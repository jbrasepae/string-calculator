const {add} = require("../src/string_calculator")

describe('add', function(){
    it('should return 0 for an empty string',function(){
        expect(add("")).toBe(0)
    })
    it('should take one number as a string',function(){
        expect(add("1")).toBe(1)
    })
    it('should take two numbers as a string',function(){
        expect(add("1,1")).toBe(2)
    })
    it('should take multiple numbers as a string',function(){
        expect(add("1,2,3,4")).toBe(10)
    })
    it('should allow a different delimiter',function(){
        expect(add("1\n2,3")).toBe(6)
    })
    it('should allow a different delimiter',function(){
        expect(add("//;\n1;2")).toBe(3)
    })
    it('should allow a different delimiter',function(){
        expect(add("//4\n142")).toBe(3)
    })
    it('should raise an exception if a negative number passed',function(){
        expect(function(){add("-1,-2,3,4")}).toThrow(new Error("negatives not allowed -1,-2"))
    })
    it('should allow a different delimiter',function(){
        expect(add("//;\n1000;1;2")).toBe(3)
    })
    it('should allow a different delimiter',function(){
        expect(add("//***\n1***2***3")).toBe(6)
    })

})
