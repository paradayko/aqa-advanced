
function learnSetTimeOut(someText, delayTime){
    setTimeout(() => {
        console.log(someText)
    }, delayTime)
}

learnSetTimeOut('I learned timeout', 3000)