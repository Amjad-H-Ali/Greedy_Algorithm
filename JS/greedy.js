console.log("Greedy!");

let change;

do {
	change = prompt('Change owed:');
}

while (change < 0 || isNaN(Number(change)) || ( isNaN(parseInt(change)) && change <= 0) );

const greedy = (changeOwed) => {

	let cents = Math.round(changeOwed * 100);

	return parseInt(cents/25) + parseInt((cents % 25)/10) + parseInt(((cents % 25)%10)/5) + parseInt(((cents % 25)%10)%5);
};

console.log(greedy(change));

// Try These

// 0.41 => 4

// 0.01 => 1

// 0.15 => 2

// 1.6 => 7

// 23 => 92

// 4.2 => 18

// -.1

// "foo"

// ""