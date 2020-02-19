/*
	(1) Write a function which takes string input and an integer n and 
	outputs a series of n strings. Each output string contains an 
	additional copy of the input string to produce a geometric stair-pattern. 
	n must be a non-negative integer. 
	Please use recursion and nested functions. 
*/
function print_stairs (n, str){
	function helper (n, str1){
		if (n == 0){
			return;
		} else {
			print(str1);
			n--;
			str1 += str;
			helper (n, str1);
		}
	}		
	helper(n, str);
}

/*
	(2) Write a function to get the current date.
	Expected Output: mm-dd-yyyy
*/
function get_date(){
	const today = new Date();
	const month = today.getMonth() + 1;
	const day = today.getDate();
	const year = today.getFullYear();
	print(month + "-" + day + "-" +year);
}

/*
	(3) Write a function to find the first year between 
	2014 and 2050 in which January 1st is a Sunday.
*/
function sun_jan_first(){
	for(let i = 2014; i < 2051; i++){
		let date = new Date(i, 0);
		if (date.getDay() == 0){
			print("January 1st, " + i + ".");
			return;
		}
	}
}

/*
	(4) Write a function to calculate days left until next 
	Christmas.
*/
function until_christmas(){
	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth();
	const day = today.getDate();
	let days_left;

	function g(year){
		const christmas = new Date(year, 11, 25);
		const second = christmas.getTime();
		const first = today.getTime();
		days_left = second - first;
		days_left = Math.floor(days_left / 60 / 60 / 24 / 1000);
	}

	if (month == 11 && day < 25){
		days_left = day - 25 + 1;
	} else if(month == 11 && day > 25){
		g(year + 1);
	} else {
		g(year);
	}
	return days_left;
}

/*
	(5) Write a function to calculate multiplication 
	and division of two numbers (input from user).
*/
function mult_and_div(first, second){
	let output = {product: first * second, quotient: first / second};
	return output;
}

/*
	(6) Write a function to get the extension of a filename.
*/
function get_extension(str){
	let patt = /\.[^.]*?$/;
	return patt.exec(str);
}

/*
	(7) Write a function to check if a string contains an upper-case
	letter and a lower-case letter.
*/
function test(str){
	const patt = /is(?= all)/g;
	const result = str.match(patt);
	return result;
}








