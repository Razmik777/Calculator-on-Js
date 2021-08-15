var tbcal = " ";
const useinp = document.getElementById('useinp');
const compinp = document.getElementById('compout');

function calcad(value) {
	tbcal += value;
	useinp.value = tbcal;
}

function removech() {
	tbcal = tbcal.substring(0, tbcal.lenght - 1);
	useinp.value = tbcal;
}

function execm() {
	if (tbcal.lenght == 0 || tbcal == "") {
		alert('Input value');
		return;
	}
	try {
		ans = eval(tbcal);
		compinp.value = ans;
	}
	catch (err) {
		alert('invalid input');
	}
}

function reset() {
	useinp.value = '';
	compinp.value = '';
	tbcal = '';
}