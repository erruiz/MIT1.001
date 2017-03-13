//Here, we will cover some examples using the map() function.
var a = [1,5,6,4,7,9,3,1,4,6,1,4];

/* 
Suppose we wanted to square and cube each element of this array. We would typically go about it with using a for() loop, but there exists a much more efficient, and much cleaner, way of accomplishing this task.
*/

//Using a for() loop
var squares = [];
var cubes = [];

for(var i = 0;i<a.length;i++){
    squares[i] = Math.pow(a[i],2);
    cubes[i] = Math.pow(a[i],3);
}

console.log(a);
console.log(squares);
console.log(cubes);

//Using map()
//First, we need a callback function to accomplish each task
var square = function(item){
    return Math.pow(item,2);
};

var cube = function(item){
    return Math.pow(item,3);
};

var newSquares = a.map(square);
var newCubes = a.map(cube);

console.log(newSquares);
console.log(newCubes);

/*
There are a few things to point out here. Notice that a for() loop requires several variable defintions prior to executing the loop, whereas map() does not. However, map does require a function to be passed to it as the first argument. Thus, these need to be defined prior to executing map().
*/

/*
Try to get this part of the code to work:

if((squares == newSquares) && (cubes == newCubes)){
    console.warn('Great! Your results match!');
}
else{
    console.warn('You fool! Your code has produced incorrect results!');
}
*/