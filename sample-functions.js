function sum(a, b) {
    return a + b;
}

function div (a, b){
    return a / b;
}
  
function containsNumbers(text){
    /*
    if (text = ' ') {
        return false;
    }
    */
    for (let i = 0; i < text.length; i++) {
        if (!isNaN(text.charAt(i)))
        return true;
    }
    return false;
}

exports.sum = sum;
exports.div = div;
exports.containsNumbers = containsNumbers;
