import fs from 'fs';

let results : number[] = [];

fs.readFile('data.txt', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	const result = data.toString().split('\n');
	let sum : number = 0;
	result.forEach((line, index) => {
		if (line !== '') {
			sum += parseInt(line);
			return; 
		} else if(line === '') {
			results.push(sum);
			sum = 0;
			return;
		}
	});
	const highest : number = results.reduce((a, b) => Math.max(a,b), -Infinity)
	const highestIndex : number = results.indexOf(highest)
	console.log(`The ${highestIndex}th elf is carrying the most calories with: ${highest} calories`);
});