function checkOrder(ordered,available) {
    if (ordered > available){
        throw new Error("Your order is too large, we don’t have enough goods.") 
}   if (ordered === 0){
        throw new Error("Your order is empty")
}
    return "Your order is accepted"
}

console.log(checkOrder(3,7))