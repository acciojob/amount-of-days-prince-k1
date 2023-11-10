//your JS code here. If required.
function daysOfAYear(year) {
	let y = parseInt(year);
	if(y%4 == 0){
		if(y % 100 == 0 && y % 400 == 0){
			return 366;
		}
		else if(y % 100 == 0 && y % 400 != 0){
			return 365;
		}
		else{return 366}
	}
	else if(y % 4 != 0){alert(365)}
	
	
}

let year = prompt();
alert(daysOfAYear(year))
