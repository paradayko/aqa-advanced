const handleEven = function(n){
        return 'number is even';
    }

const handleOdd = function(n){
        return 'number is odd';
    }

const handleNum = (num, EvenCallback, OddCallback) => {
   if (num % 2 === 0){
    return EvenCallback();
   } else {
    return OddCallback()
   }
}
console.log(handleNum(5,handleEven,handleOdd));