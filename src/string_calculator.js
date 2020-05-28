function add(str){
    if (str === ""){
      return 0
    }
    if (str.match(/.+(?=\/\/)/g) != null && /\n/.test(str) == true){
      throw new Error("invalid input");
    }
    if(str.match(/\d$/g) == null && str.length > 0){
      throw new Error("invalid input");
    }
    const delimiter = getDelimiter(str)
    const formattedInput = formatInput(str)
    return calculateSum(getNumbers(formattedInput, delimiter)) 
  }
  function formatInput(str){
    const delimiterRegex = /^(\/\/.*\n)/
    const matches = delimiterRegex.exec(str)
    if(matches && matches.length > 0){
      return str.replace(delimiterRegex,"")
    }
    return str
  }
  function getDelimiter(str) {
    const delimiters = []
    const multipleDelimiterRegexp = /(?:^\/\/)?\[([^\[\]]+)\]\n?/g
    let matches = multipleDelimiterRegexp.exec(str)
    for (let i = 0; matches !== null; i++) {
      delimiters.push(matches[1])
     matches = multipleDelimiterRegexp.exec(str)  
    }
    if(delimiters.length > 0){
      return new RegExp("["+delimiters.join("")+"]")
    }
    matches = (/^\/\/(.*?)\n/g).exec(str)
    if(matches && matches[1]){
      return matches[1]
    }
    return /[\n,]/
  }
  function getNumbers(string, delimiter){
    return string.split(delimiter)
      .filter(n => n !== "")
      .map(n => parseInt(n))
  }
  function calculateSum(numbers){
    const negatives = []
    const finalSum = numbers.reduce((sum, n) =>{
      if(n >= 1000){
        return 0
      }
      if(n < 0){
        negatives.push(n)
        return 0
      }
      return sum + n
    },0)
    if(negatives.length > 0){
      throw Error('negatives not allowed '+negatives.join(','))
    }
    return finalSum
  }

console.log(add("//[(-_-')][%]\n1(-_-')2%3"))
module.exports = {add}