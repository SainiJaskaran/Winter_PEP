function calculateDiscount(a,b=10){
    return a-b;
}
console.log(calculateDiscount(20));

function mergeArrays(a,b){
    return [...a, ...b];
}
console.log(mergeArrays([1,2,3],[4,5,6]));

function logArguments(...x){
    return [x];
}
console.log(1,2,3,4,5,6);

function createMessage(msg="HI",...a){
    for (const i of a){
        console.log(msg + " " + i);
    }
}
createMessage(undefined,"a","b","c")

function sum(a){
    let sum=0;
    for(const i of a){
        sum+=i;
    }
    console.log(sum);
}
sum([1,2,3,4,5]);

function createUserProfile(username,age=25,country="Unknown"){
    return {username,age,country}
}
console.log(createUserProfile("John",30,"USA"));