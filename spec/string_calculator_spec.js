const {stringCalculator} = require("../src/string_calculator")

describe('stringCalculator', function(){
    it('should return 0 for an empty string',function(){
        expect(stringCalculator.add("")).toBe(0)
    })
    it('should input one number as a string',function(){
        expect(stringCalculator.add("1")).toBe(1)
    })
    it('should input two numbers as a string',function(){
        expect(stringCalculator.add("1,1")).toBe(2)
    })
    it('should input multiple numbers as a string',function(){
        expect(stringCalculator.add("1,2,3,4")).toBe(10)
    })
    it('should allow newlines',function(){
        expect(stringCalculator.add("1\n2,3")).toBe(6)
    })
    it('should allow newlines',function(){
        expect(stringCalculator.add("//;\n1;2")).toBe(3)
    })
    it('should allow newlines',function(){
        expect(stringCalculator.add("//4\n142")).toBe(3)
    })
    it('should allow newlines',function(){
        expect(function(){stringCalculator.add("-1,-2,3,4")}).toThrow(new Error("negatives not allowed -1,-2"))
    })
    it('should allow newlines',function(){
        expect(stringCalculator.add("//;\n1000;1;2")).toBe(3)
    })
    it('should allow newlines',function(){
        expect(stringCalculator.add("//***\n1***2***3")).toBe(6)
    })
    it('should allow newlines',function(){
        expect(stringCalculator.add("//[:D][%]\n1:D2%3")).toBe(6)
    })
    it('should allow newlines',function(){
        expect(stringCalculator.add("//[***][%%%]\n1***2%%%3")).toBe(6)
    })
    it('should allow newlines',function(){
        expect(stringCalculator.add("//[(-_-')][%]\n1(-_-')2%3")).toBe(0)
    })
    it('should allow newlines',function(){
        expect(stringCalculator.add("//[abc][777][:(]\n1abc27773:(1")).toBe(7)
    })






})
