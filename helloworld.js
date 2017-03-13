// Let's begin our journey towards learning JavaScript with a traditional 'Hello, World!' exercise.
var Person = 'Erick';                   //name which will be passed to sayHello

var sayHello = function(person){
    return 'Hello,' + person + '!';     //returns 'Hello, Person!'
};

console.log(sayHello(Person));          //writes the output to the console