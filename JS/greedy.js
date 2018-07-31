console.log("Greedy!");

let change;

do {
	change = prompt('Change owed:');
}
while (change < 0 || isNaN(Number(change)) || isNaN(parseInt(change)));

console.log(change);