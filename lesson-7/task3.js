function divide(numerator, denominator){
    let dividedFraction = numerator / denominator
    if (denominator === 0){
        throw new Error ('Number cannot be 0');
    } if (typeof numerator !== 'number' || typeof denominator !== 'number'){
        throw new Error ('Both arguments must be numbers');
    }
    return dividedFraction
}

try {
    divide(5, 0)
} catch(error){
    console.error(error.message)
} finally{
    console.log('Робота завершена')
};

try {
    divide('hello', 7)
} catch(error){
    console.error(error.message)
} finally{
    console.log('Робота завершена')
};

try {
    let result = divide(14, 7)
    console.log(`Result = ${result}`)
} catch(error){
    console.error('Something went wrong')
} finally{
    console.log('Робота завершена')
}