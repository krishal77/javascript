function waitfor3s(resolve){
setTimeout(resolve,3000);
}
function setTimeoutPromisified(){
    return new Promise(waitfor3s);
}
function callback(){
    console.log("3 seconds have passed");
}
setTimeoutPromisified(3000).then(callback)