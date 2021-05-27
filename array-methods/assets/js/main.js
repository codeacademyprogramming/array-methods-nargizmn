// FILTER
function filter (array, cb){
    const result = [];
    for(let i=0; i<array.length; i++)
    {
        if(cb(array[i])){
            result.push(array[i]);
        }
    }
    return result;
}

function isEven(number){
    if(number%2==0)
    {
        return true;
    }
    return false;
}

const numbers = [2, 5, 8, 10];

console.log(filter(numbers, isEven));


// MAP
function map (array, cb){
    const result = [];
    for(let i = 0; i< array.length; i++){
        const oprResult = cb(array[i]);
        result.push(oprResult);
    }
    return result;
}


function multiplyWithFive(number){
    return number*5;
}

console.log(map(numbers, multiplyWithFive));


// FOREACH
function forEach(array, cb){
    for(let i=0; i<array.length; i++){
        cb(array[i], i, array);
    }
}

function forEachCbFunc(item, index, array){
    console.log(item, index, array);
}

forEach(numbers, forEachCbFunc);


// SOME
function some(array, cb){
    for(let i =0; i<array.length;i++){
        const oprResult = cb(array[i]);
        if(oprResult) return true;
    }
    return false;
}

console.log(some(numbers, isEven));


// EVERY
function every (array, cb){
    for(let i =0; i<array.length;i++){
        const oprResult = cb(array[i]);
        if(!oprResult) return false;
    }
    return true;
}

console.log(every(numbers, isEven));


