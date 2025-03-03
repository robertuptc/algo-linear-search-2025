exports.linearSearch = function(valueToFind, arrayToSearchThrough) {
    let answer;

    for (let i = 0; i < arrayToSearchThrough.length; i++) {
        valueToFind == arrayToSearchThrough[i] 
        ? answer = arrayToSearchThrough.indexOf(valueToFind) 
        : answer
    }
    
    return answer
};

exports.globalLinearSeach = function(valueToFind, arrayToSearchThrough) {
    let answer = []

    for (let i = 0; i < arrayToSearchThrough.length; i++) {
        valueToFind === arrayToSearchThrough[i] 
        ? answer.push(i)
        : answer
    }
    return answer
};

