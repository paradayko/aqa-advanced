function recursion(num){
    console.log (num)
    if (num <= 0){
        return;
    } else {
        return recursion(num-1);
    }
}

recursion(5);
