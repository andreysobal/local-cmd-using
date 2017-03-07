var str='jfhjt';
function gHappy(str) {
	quantity = str.length;
	for (var i=0; i<quantity; i++) {
		if (str.charAt(i)==='g'){
			if ((str.charAt(i+1)!=='g')&(str.charAt(i-1)!=='g')){
				return false;
			}//end second if
		}//end first if
	}//end for
	return true;
}//end function
console.log(gHappy(str));