import fs from 'fs';
let results: number[] = [];
fs.readFile('data.txt', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}

	const datas = data.toString().split('\n');
	datas.forEach((line: string, index: number) => {
		const singleRound = line.split(' ');
		const opponentSelection: string = singleRound[0];
		const playerSelection: string = singleRound[1];
		const wins = () => {
			if (opponentSelection === playerSelection) {
				if (playerSelection === 'X') {
					return 1 + 1;
				} else if (playerSelection === 'Y') {
					return 2 + 2;
				} else if (playerSelection === 'Z') {
					return 3 + 3;
				}
			} else if (opponentSelection === 'A' && playerSelection === 'Z') {
				return 3 + 6;
			} else if (opponentSelection === 'A' && playerSelection === 'Y') {
				return -1;
			} else if (opponentSelection === 'B' && playerSelection === 'X') {
				return -1;
			} else if (opponentSelection === 'B' && playerSelection === 'Z') {
				return 1;
			} else if (opponentSelection === 'C' && playerSelection === 'X') {
				return 1;
			} else if (opponentSelection === 'C' && playerSelection === 'Y') {
				return -1;
			}
		};
	});
});
