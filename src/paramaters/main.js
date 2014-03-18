/* Rest parameters */
function sortRestArgs(...theArgs) {
	var sortedArgs = theArgs.sort();
	return sortedArgs;
}
console.log(sortRestArgs(10,4,1,2,3));

/* Spread parameters */
function f(x, y, z) {
	console.log(x,y,z);
}
var args = [0, 1, 2];
f(...args);

/* Default paramaters */
function foo(bar='baz') {
	console.log(bar);
}
foo();