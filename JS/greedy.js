console.log("Greedy!");

let change;

do {
	change = prompt('Change owed:');
}

while (change < 0 || isNaN(Number(change)) || isNaN(parseInt(change)));

const greedy = (changeOwed) => {

	let cents = Math.round(changeOwed * 100);

	console.log(cents);
};

greedy(change);