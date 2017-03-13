//As a next exercise, we will cover a basic example using reduce().
var a = [1,5,6,4,7,9,3,1,4,6,1,4];

/*
Suppose we wanted to sum all the elements of this array. Once again, we could accomplish this using a for() loop, but ultimately, we would like to use the reduce() function.
*/

//Using a for() loop
var sum = 0;

for(var i=0;i<a.length;i++){
    sum += a[i];
}

console.log('The sum of the elements of this array is: ' + JSON.stringify(sum));

//Using reduce
var sigma = function(accumulator,newItem){
    return accumulator + newItem;
};

var newSum = a.reduce(sigma,0);

console.log('Using reduce, the sum of the elements of the same array is: ' + JSON.stringify(newSum));

/*
Notice that reduce(), like map(), requires a function to be passed to it as the first argument. However, we can also give reduce a "starting value" by passing a second argument. In this case we wanted our sum to start from zero, but in general, the starting value can be any number. Another difference between map() and reduce() is that map() creates a new array, of the same size, from an existing one, while reduce() simply goes through the elements of a specified array, one by one.
*/

/*
So far, so good, but what if we wanted to add objects to construct a new object instead of the elements of an array?

As an example, let's add the Cartesian unit vectors to construct a new vector.
*/
var unitVectors = {
    e1: {x:1,y:0,z:0},
    e2: {x:0,y:1,z:0},
    e3: {x:0,y:0,z:1}
};

/*
var vecSum = function(vectors){
    var xComponent = vectors.e1.x + vectors.e2.x + vectors.e3.x;
    var yComponent = vectors.e1.y + vectors.e2.y + vectors.e3.y;
    var zComponent = vectors.e1.z + vectors.e3.z + vectors.e3.z;
    return {x: xComponent, y: yComponent, z: zComponent};
};

var newVector = unitVectors.reduce(vecSum);

console.log('x: ' + JSON.stringify(newVector.x) + ', y: ' + JSON.stringify(newVector.y) + ', z: ' + JSON.stringify(newVector.z));
*/

var first = function(object){
    return Object.keys(object)[0];
};

console.log(first(unitVectors));