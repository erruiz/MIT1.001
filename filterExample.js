//We will conclude by covering some basic examples using filter().

//To start, let's create an array of random integers. We will have to do this with a for() loop. 
var n = Math.floor(Math.random()*10);
var a = [];

for(var i=0;i<n;i++){
    a[i] = Math.floor(Math.random()*10);
}

/*
Since filter() requires a callback function to be passed to it as the first argument, we need to write that first. In this case, we'd like to keep the elements of the array which are greater than 5.
*/

var isGreater = function(value){
    return value > 5;
};

var filtered = a.filter(isGreater);

console.log(filtered);