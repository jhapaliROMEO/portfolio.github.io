function calcInterest(){
	let principal = document.getElementById('p').value;
	let time = document.getElementById('t').value;
	let rate = document.getElementById('r').value;

	let simpleInterest = (principal*time*rate)/100;
 
 	document.getElementById('calc').innerHTML = simpleInterest;

}
function show(){
	alert("You cannot edit the resultbox.");
}