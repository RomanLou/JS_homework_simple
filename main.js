function simpleBtn () {
	var min = document.forms['simple'].min.value,
		max = document.forms['simple'].max.value;
	
	document.getElementById('result').innerHTML ='';
	
	mark:
	for (var i = min; i <= max; i++) {

    	for (var j = 2; j < i; j++) {
      		if (i % j == 0) continue mark;
    	}
   		 document.getElementById('result').innerHTML +=i + ','; 
  	}   		
}