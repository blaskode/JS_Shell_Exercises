
/*
	(1) Write a function that promps the user for their
	name, and greets the user by their name.
*/
function say_hello(){
	print("What's your name?");
	const name = readline();
	print(`Hello, ${name}.`);
}

/*
	(2) Write a function where the program takes a random
	integer between 1 to 10, the user is then prompted 
	to input a guess number. 
*/
function guess_number(){
	const number = Math.ceil((Math.random() * 10));
	function g(){
		print("Guess a number from 1-10.")
		const guess = readline();
		if (guess == number){
			print("You guessed correctly.");
			return;
		} else {
			g();
		}
	}
	g();
}

/*
	(3) Write a function to convert temperatures
	from Celsius to Fahrenheit.
*/
function celsius_to_f(celsius){
	const f = celsius * 9/5 + 32;
	return f;
}

/*
	(4) Write a function to convert temperatures
	from Fahrenheit to Celsius.
*/
function fahrenheit_to_c(fahrenheit){
	const c = (fahrenheit - 32) * 5/9;
	return c;
}

/*
	(5) Write a function to create a new string by adding 
	"Py" in front of a given string. If the given string  
	begins with "Py" then return the original string. 
*/
function add_py(str){
	if(str.indexOf("Py") == 0){
		return str;
	} else {
		return "Py" + str;
	}
}

/*
	(6) Write a function to create a new string from
	a given string changing the position of first and
	last characters. The string length must be greater 
	than or equal to 1.
*/
function switch_first_last(str){
	const first = str.substr(0, 1);
	const last = str.substr((str.length - 1), 1);
	const middle = str.slice(1, str.length - 1);
	return last + middle + first;
}

/*
	(7) Write a function to remove a character at the specified 
	position of a given string and return the new string.
*/
function remove_char_at(str, pos){
	const first = str.slice(0, pos);
	const last = str.slice(pos + 1, str.length);
	return first + last;
}

/*
	(8) Write a function to check whether a given positive 
	number is a multiple of 3 or a multiple of 7.
*/
function div_by_3_or_7(num){
	const truth = (num % 7 == 0) || (num % 3 == 0);
	return truth;
}

/*
	(9) Write a function to create a new string from a given 
	string taking the last 3 characters and adding them to both 
	the front and back. The string length must be 3 or more.
*/

function last_three(str){
	const end = str.slice(str.length - 3, str.length);
	return end + str + end;
}

/*
	(10) Write a JavaScript program to check whether a string 
	starts with 'Java' and false otherwise.
*/

function starts_with_java(str){
	const i = str.indexOf("Java");
	if (i == 0) {
		return true;
	} else {
		return false;
	}
}










