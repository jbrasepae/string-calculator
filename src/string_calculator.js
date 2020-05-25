function    add(str){
    var numbers = [];
    var expression = "";
    var delimeter = "";
    if(str == ""){
        return(0);
    }
    if(str.length == 1){
        return (parseInt(str));
    }
    if(str.match("//") && !isNaN(parseInt(str.charAt(str.length - 1)))){
        expression = str.slice(str.search("\n") + 1, str.length);
        delimeter = str.slice(2, str.search("\n"));
        numbers = expression.split(delimeter);
    }
    else if(str.match(/[\n]/) && /\d/.test(str[str.length - 1])
    && /\d/.test(str[0]) && str.match(/[\/]/g) == null ){
        numbers = str.split("\n").toString();
        numbers = numbers.split(",");
    }
    else if(/^[\d,-\d]*$/.test(str)){
        numbers = str.split(",");
    }
    if(numbers.toString().match(/-\d/)){
        throw Error("negatives not allowed " + numbers.toString().match(/-\d/g));
    }
    return(numbers.filter(function ignore(num) {
        return num < 1000;
    }).reduce((sum, current)=> parseInt(sum) + parseInt(current)));
}

console.log(add("//;\n1000;1;2"));
module.exports = {add}