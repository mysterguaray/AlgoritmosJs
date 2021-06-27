/*
	Everyday in supermarkets cashiers have to give back correct change to customers who pay in cash. 
	How could they determine wich bills to give back so that the number of bills is minimum?

	in this exercise, we ask you to find the optimal solution to give back change when a checkout only has
	$2, $5 and $10 bills.

	to make the problem simpler  we'll consider that we have an infinite amount of bills.

	----------------------------------some examples-----------------------------

	cash to give back	|	possible solutions	|	optimal solution
	____________________|_______________________|__________________
	   1				|	impossible			|	impossible
	____________________|_______________________|________________________   
	   6				|	2+2+2				|	2+2+2 
	____________________|_______________________|____________________________
	   10				|	2+2+2+2+2			|
	   					|	5+5					|
						|   10					|
	____________________|_______________________|___________________________
	   9007199254740991	|	...					|	10*
	   					|						|	9007199254740991+
						|						|	   5+2*3
	____________________|_______________________|_______________________________
	
	the cash to give back is represented by an object with 3 properties two, five and ten wich respectively store the
	number of $2 bills, $5 bills and $10 bills.

	Implemente the function change(cash) wich should return an object whose two, five and ten atributes represent the
	change to give back.

	if it is not possible to give back change return null.

	To get the maximum amount of points, your solution will have to give back correct change with the minimal amount of bills
*/

function change(cash){
	
	let five, two, ten;
	let unidades=cash%10;
	if(unidades==1 || unidades==3){
		let	retorno ='impossible';
		return retorno;
	}
	else{
			switch(unidades){
				case 9:
					five=1;
				    two=2;
					break;
				case 8:
					five=0;
					two=4;
					break;
				case 7:
					five=1;
					two=2;
					break;
				case 6:
					five=0;
					two=3;
					break;
				case 5:
					five=1;
					two=0;
					break;
				case 4:
					five=0;
					two=2;
					break;
				case 2:
					five=0;
					two=1;
					break;
			}

			ten= Math.floor(cash/10);

			return{
				two,
				five,
				ten
			};
		}
	}
	
resultado=change(46);
console.log(resultado);