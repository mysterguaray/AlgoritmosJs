/*
	implement closesToZero() to return the integer in the array numbers that is closest to zero
    if there are two integers equally close to zero consider the positive element to be closer to zero 
    if number is null or empty return zero
 */

function closesToZero(vector)
{
	
	longitud=vector.length;
	let valor;
	let menor;
	
	let primero=Math.abs(0-vector[0]);
	let segundo=Math.abs(0-vector[1]);
	
	
	if(primero<segundo)
	{
	 	 menor=primero;
	 	 valor=vector[0];
	}
	else
	{
		 menor=segundo;
		 valor=vector[1];
	}
	
	for(let i=2; i<longitud; i++)
	{
		
		if(menor < Math.abs(0-vector[i]))
		{
			menor=menor;
			valor=valor;
		}
		else
		{
			menor = Math.abs(0-vector[i]);
			valor=vector[i];
		}
		
	}
	
	if(valor==null){
		valor=0;
		return valor;
	}
	if(valor==undefined){
		valor=0;
		return valor;
	}

	let contador=0;
	for(let j=0; j<longitud; j++)
	{
		if(Math.abs(valor)==Math.abs(vector[j]))
		{
			contador=contador+1;
		}
		
	}
	if(contador>1){
		return Math.abs(valor);
		
	}
	else {return valor;}
	
	
}

let vector=[-4,6,9,7,-2];

resultado=closesToZero(vector);
console.log(resultado)