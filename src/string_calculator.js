function add(str){
    num = str
    //str = num
    if(str === ""){
        return 0;
    }
    num = str.split(",")
    var sum = 0;
   // var arrayLength = num.length;
    for(var i = 0; i < num.length; i++){
        sum += parseInt(num[i])
    }
    return sum

    
}
console.log(add("1,1"))
module.exports = {add}
