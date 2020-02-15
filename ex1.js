/*
(1) Display the current day and time in the 
	following format: 
		Today is : Tuesday.
		Current time is : 10 PM : 30 : 38
*/

function day_time() {
	let str1 = "Today is : ";
	
	const current = new Date();
	const day = current.getDay();
	const hour = current.getHours();
	switch(day){
		case 0:
			str1 += "Sunday";
			break;
		case 1:
			str1 += "Monday";
			break;
		case 2:
			str1 += "Tuesday";
			break;
		case 3:
			str1 += "Wednesday";
			break;
		case 4:
			str1 += "Thursday";
			break;
		case 5:
			str1 += "Friday";
			break;
		case 6:
			str1 += "Saturday";
			break;
	}

	let str2 = "Current time is : ";

	if (hour < 12) {
		str2 += hour;
		str2 += " AM : ";
	} else if (hour == 12) {
		str2 += hour;
		str2 += " PM : ";
	} else {
		str2 += (hour - 11);
		str2 += " PM : ";
	}

	str2 += current.getMinutes();
	str2 += " : ";
	str2 += current.getSeconds();

	return (str1 + '\n' + str2);
}

/*
(2) Display the current date in the following
	format: dd-mm-yyyy
*/

function todays_date() {
	const current = new Date();
	str = "";
	str += current.getUTCDate();
	str += '-';
	const month = current.getUTCMonth() + 1;
	str += month;
	str += '-';
	str += current.getFullYear();
	return str;
}

/*
(3) Find the area of a triangle given the length
	of its three sides.
*/

function triangle_area(x, y, z) {
	const p = (x + y + z)/2;
	const a = p - x;
	const b = p - y;
	const c = p - z;
	let product = p*a*b*c;
	const area = Math.sqrt(product);
	return area;
}

/*
(4) Compute the factorial of a given number. Use
	an accumulator to employ tail-recursion.
*/
function factorial(n){
	function f(acc, n){
		if (n != 0) {
			return f(acc*n, n - 1);
		} else {
			return acc;
		}
	}
	return f(1, n);
}

/*
(5) Given a positive integer n, return an array that 
	contains the Fibonacci sequence up to the nth term.
	Start counting from the 0th term.
*/
function fibonacci(n){
	function f(n, x, y, arr){
		if (n == 0){
			return arr;
		} else {
			arr.push(x + y);
			return f(n-1, y, x + y, arr);
		}
	}
	return f(n-1, 0, 1, [0, 1]);
}
/*
(6) Integer Division: write a function that--when provided two 
	integers (a dividend, and divisor)--returns an object with two
	members: the quotient, and the remainder.
*/
function divide(dividend, divisor) {
	const q = Math.floor(dividend/divisor);
	const r = dividend % divisor;
	let div = {};
	div.quotient = q;
	div.remainder = r;
	return div;
}

/*
(7) Convert a series of comma-separated values to an array. 
*/
function csv_to_array(str){
	let arr = str.split(',');
	return arr;
}

/*
(8) Sum the elements of a list of numbers separated by commas. 
*/
function sum_csv(str){
	let num_arr = str.split(',');
	let sum = 0;
	while(num_arr.length != 0){
		let x = num_arr.pop();
		sum += parseInt(x);
	}
	return sum;
}

/*
(9) This function takes two arguments: (1) a list of numbers, separated
	by commans, and (2) a single integer. The function returns a list 
	of integers divisible by the given integer. 
*/ 
function div_sort(nums, div){
	let divisible = [];
	let num_arr = nums.split(',');
	while(num_arr.length != 0){
		let x = num_arr.shift();
		if (x % div == 0) {
			divisible.push(x);
		}
	}
	return divisible;
}

/*
(10) Write a function that--given a string of words--returns the 
	string with the vowels removed.
*/
function remove_vowels(str){
	let input = str.split('');
	let output = [];
	for(const value of input) {
		switch(value.toLowerCase()){
		case 'a':
			break;
		case 'e':
			break;
		case 'i':
			break;
		case 'o':
			break;
		case 'u':
			break;
		default:
			output.push(value);
			break;
		}
	}
	return output.join('');
}







