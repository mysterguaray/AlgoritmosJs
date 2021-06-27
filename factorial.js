/*
	the following factorial function written by your colleague Fred is supposed to return the factorial of a number but it is broken
    Fix the factorial function.abs
*/

function factorial(n){

	let total=1;
	if(n==0){
		return 1;
	}
	else{
		for(i=n; i>0; i--){
			total*=i;
		}
		return total;
	}
}

resultado= factorial(5);
console.log(resultado);