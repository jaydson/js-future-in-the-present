/* Let */
for (var i = 0; i < 3; i++) {
  let j = i * i;
  console.log(j); // Works
}
console.log(j); // Fail

/* Const */
const π = 3.14;
console.log(π);

try {
	π += 1;
} catch (constError) {
	console.log(constError);
}
