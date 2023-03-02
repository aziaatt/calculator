const add = function(a, b){
    let solution = 0;
    solution = a + b;
    return solution;
}

const subtract = function(a, b){
    let solution = 0;
    solution = a - b;
    return solution;
}

const multiply = function(a, b){
    let solution = 0;
    solution = a * b;
    return solution;
}

const divide = function(a, b){
    let solution = 0;
    solution = a / b;
    return solution;
}

const operate = function(){
    let operator; /*prompt("What operator would you like to use?")*/
    let a; /*parseInt(prompt("What is the first number?"))*/
    let b; /*parseInt(prompt("What is the second number?"))*/
    let solution = 0
    if(operator == "add"){
        let solution = add(a, b);
        return solution;
    } else if(operator == "subtract"){
        let solution = subtract(a, b);
        return solution;
    } else if(operator == "multiply"){
        let solution = multiply(a, b);
        return solution;
    } else if(operator == "divide"){
        let solution = divide(a, b);
        return solution;
    }
    return solution;
}
// console.log(operate());