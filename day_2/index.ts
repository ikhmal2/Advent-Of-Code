import fs from 'fs';
let results: number[] = [];

interface options {
	Rock: string;
	Paper: string;
	Scisscor: string;
}

interface results {
	Win: number;
	Lose: number;
	Tie: number;
}
// opponent selection
const opponentSelection: options = {
	Rock: 'A',
	Paper: 'B',
	Scisscor: 'C',
};

// player selection
const playerSelection: options = {
	Rock: 'X',
	Paper: 'Y',
	Scisscor: 'Z',
};

// result
const result: results = {
	Win: 6,
	Lose: 0,
	Tie: 3,
};

let totalScore: number = 0;

function wins(opponentSelect: string, playerSelect: string): number | 0 {
	let score = 0;
	if (
		(opponentSelect === opponentSelection.Rock &&
			playerSelect === playerSelection.Rock) ||
		(opponentSelect === opponentSelection.Paper &&
			playerSelect === playerSelection.Paper) ||
		(opponentSelect === opponentSelection.Scisscor &&
			playerSelect === playerSelection.Scisscor)
	) {
		score =
			playerSelect === playerSelection.Rock
				? result.Tie + 1
				: playerSelect === playerSelection.Paper
				? result.Tie + 2
				: result.Tie + 3;
	} else if (
		opponentSelect === opponentSelection.Rock &&
		playerSelect === playerSelection.Scisscor
	) {
		score = result.Lose + 3;
	} else if (
		opponentSelect === opponentSelection.Scisscor &&
		playerSelect === playerSelection.Rock
	) {
		score = result.Win + 1;
	} else if (
		opponentSelect === opponentSelection.Scisscor &&
		playerSelect === playerSelection.Paper
	) {
		score = result.Lose + 2;
	} else if (
		opponentSelect === opponentSelection.Paper &&
		playerSelect === playerSelection.Scisscor
	) {
		score = result.Win + 3;
	} else if (
		opponentSelect === opponentSelection.Paper &&
		playerSelect === playerSelection.Rock
	) {
		score = result.Lose + 1;
	} else if (
		opponentSelect === opponentSelection.Rock &&
		playerSelect === playerSelection.Paper
	) {
		score = result.Win + 2;
	}

	return score;
}
function gameSet(opponentSelect: string, playerSelect: string): number | 0 {
	let score = 0;
	if (
		(opponentSelect === opponentSelection.Rock &&
			playerSelect === playerSelection.Rock) ||
		(opponentSelect === opponentSelection.Paper &&
			playerSelect === playerSelection.Paper) ||
		(opponentSelect === opponentSelection.Scisscor &&
			playerSelect === playerSelection.Scisscor)
	) {
		score =
			playerSelect === playerSelection.Rock
				? result.Tie + 1
				: playerSelect === playerSelection.Paper
				? result.Tie + 2
				: result.Tie + 3;
	} else if (
		opponentSelect === opponentSelection.Rock &&
		playerSelect === playerSelection.Scisscor
	) {
		score = result.Lose + 3;
	} else if (
		opponentSelect === opponentSelection.Scisscor &&
		playerSelect === playerSelection.Rock
	) {
		score = result.Win + 1;
	} else if (
		opponentSelect === opponentSelection.Scisscor &&
		playerSelect === playerSelection.Paper
	) {
		score = result.Lose + 2;
	} else if (
		opponentSelect === opponentSelection.Paper &&
		playerSelect === playerSelection.Scisscor
	) {
		score = result.Win + 3;
	} else if (
		opponentSelect === opponentSelection.Paper &&
		playerSelect === playerSelection.Rock
	) {
		score = result.Lose + 1;
	} else if (
		opponentSelect === opponentSelection.Rock &&
		playerSelect === playerSelection.Paper
	) {
		score = result.Win + 2;
	}

	return score;
}

fs.readFile('data.txt', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}

	const datas = data.toString().split('\n');
	datas.forEach((line: string, index: number) => {
		const singleRound = line.split(' ');
		const opponentSelect: string = singleRound[0];
		const playerSelect: string = singleRound[1];
		totalScore += wins(opponentSelect, playerSelect);
		// console.log(
		// 	`Total score for round ${index} is ${wins(opponentSelect, playerSelect)}`
		// );
	});
	console.log(totalScore);
});
