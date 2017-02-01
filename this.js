console.log('----10-and-19-all-numbers----');

for (var i = -10; i <= 19; i++) {
	console.log(i);
};

console.log('----10-and-40-even-numbers----');

for (var i = 10; i <= 40; i++) {
	if (i % 2 === 0) {
		console.log(i);}
};

console.log('----300-and-333-odd-numbers----');

for (var i = 300; i <= 333; i++) {
	if (i % 2 !== 0) {
		console.log(i);}
};

console.log('-5-and-50-divisible-by-5-and-3-');

for (var i = 5; i <= 50; i++) {
	if (i % 5 === 0 && i % 3 === 0) {
		console.log(i);}
};
