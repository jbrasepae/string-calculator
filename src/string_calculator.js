function add(str){
    num = str
    if(num === ""){
        return 0;
    }
    str = num.split(",")
    var sum = 0;
    for(var i = 0; i < str.length; i++){
        sum += parseInt(str[i])
    }
    return sum

    
}
console.log(add("1,2,3,4"))
module.exports = {add}
