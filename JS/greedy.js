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