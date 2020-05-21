function add(str) {
    num = str
    if (str === "") {
        return 0;
    }
    num = str.split("\n|,")
    //var splitInput = numbers.Split(new[] {",", "\n"}, StringSplitOptions.None);
    var sum = 0;
    for (var i = 0; i < num.length; i++) {
        sum += parseInt(num[i])
    }
    return sum

}
// function getDelimiter(input) {
//     const delimiters = []
//     const multipleDelimiterRegexp = /(?:^\/\/)?\[([^\[\]]+)\]\n?/g
//     let matches = multipleDelimiterRegexp.exec(input)
//     while (matches !== null) {
//         delimiters.push(matches[1])
//         matches = multipleDelimiterRegexp.exec(input)
//     }
//     if (delimiters.length > 0) {
//         return new RegExp('[' + delimiters.join('') + ']')
//     }
//     matches = /^\/\/(.*)\n/.exec(input)
//     if (matches && matches[1]) {
//         return matches[1]
//     }
//     return /[\n,]/


console.log(add("1\n2,3"))
module.exports = {add}
