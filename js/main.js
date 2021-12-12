var name = "xxx";

var name = "dhfgdhf";




function add(){
	var sum = 0;
	for(let i = 0, j=arguments.length; i < j;i++){
		sum += arguments[i];
	}
	return sum;
}

console.log(add(1,2,3,4,5,6,7,8,9,10))