var getNums = function(num){
	var thisNum = parseInt(num);
	var ones = {
		1: "one",
		2: "two",
		3: "three",
		4: "four", 
		5: "five",
		6: "six",
		7: "seven",
		8: "eight",
		9: "nine",
		10: "ten",
		11: "eleven",
		12: "twelve",
		13: "thirteen",
		14: "fourteen",
		15: "fifteen",
		16: "sisxteen",
		17: "seventeen",
		18: "eighteen",
		19: "nineteen"
	}
	var tens = {
		20: "twenty",
		30: "thirty",
		40: "forty",
		50: "fifty",
		60: "sixty",
		70: "seventy",
		80: "eighty",
		90: "ninety"
	}
	if(thisNum < 20 && thisNum > 0){
		return ones[num];
	}
	else if(thisNum >= 20){
		return tens[num];
	}

	else if(thisNum ===0){
		return false;
	}

};





var threeDigitNum = function(num){
	var arr = num.split("");
	var midVal;
	var endval;

	if(arr[0] ==="1"){
	  midVal = getNums(arr[0].concat(arr[1]));
	 return midVal;
	}
	
	else if(arr[0] !=="1" && arr[0] !=="0" && arr[1] !=="0"){
	  midVal = getNums(arr[0].concat("0"));
	  endval = getNums(num.slice(1,2));
	 return midVal + " " + endval;
	}

	else if(arr[0]==="0" && arr[1] !== "0"){
	   endval = getNums(num.slice(1,2));
	  return endval;
	}

	else if(arr[0]!=="0" && arr[1]==="0"){
	   midVal = getNums(arr[0].concat("0"));
	  return midVal;
	}

	else{
	  return "";
	}
};

var fourDigitNum = function(num){
  var arr = num.split("")
  if(arr[0] !== "0"){
  	var firstNum = getNums(arr[0]);
  	return firstNum + " " + "hundred" + " " + threeDigitNum(num.slice(1,3));
  }
  else {
  	return threeDigitNum(num.slice(1,3));
  }

};

var fiveDigitNum = function(num){
  var arr = num.split("")
  if(arr[0] !== "0"){
  	var firstNum = getNums(arr[0]);
  	return firstNum +" "+"hundred"+" "+threeDigitNum(num.slice(1,3))+" "+"thousand";
  }
  else if(arr[0]==="0" && arr[1]!=="0"||arr[2]!=="0") {
  	return threeDigitNum(num.slice(1,3))+" "+"thousand";
  }
  else{
  	return threeDigitNum(num.slice(1,3));
  }

};






var eightDigitNum = function(num){
 var arr = num.split("")
 var firstNum;
  if(arr[0] !== "0"){
  	firstNum = getNums(arr[0]);
  	return firstNum +" "+"hundred"+" "+threeDigitNum(num.slice(1,3))+" "+"million";
  }

  else if(arr[0]==="0" && arr[1]!=="0"||arr[2]!=="0") {
  	return threeDigitNum(num.slice(1,3))+" "+"million";

  }
  else{
  	return threeDigitNum(num.slice(1,3));;
  }
};










var wordVals = function(num){
  var arr = num.split("");
  var size = arr.length;
  var header;
  var headNum;
  var midSet;
  var backEnd;
  var secondSet;
  var thirdSet;
  var fourthSet;
 	
	if(size >=1 && size < 2){
		header = arr[0];
	    headNum = getNums(header);
		return headNum;
	 }
	else if(size >=2 && size < 3){
		headNum = threeDigitNum(num.slice(0,2));
		return headNum;
	 }
	else if(size >=3 && size < 4){
		header = arr[0];
	    headNum = getNums(header);
	    backEnd = num.slice(1,3);
	    return headNum + " " + "hundred" + " " + threeDigitNum(backEnd);
	 }

	 else if(size >=4 && size < 5){
		header = arr[0];
	    headNum = getNums(header);
	    backEnd = num.slice(1,4);
	    return headNum + " " + "thousand" + " " + fourDigitNum(backEnd);
	 }

	 else if(size >=5 && size < 6){
	    headNum = threeDigitNum(num.slice(0,2));
	    backEnd = num.slice(2,5);
	    return headNum + " " + "thousand" + " " + fourDigitNum(backEnd);
	 }
	 else if(size >=6 && size < 7){
		header = arr[0];
	    headNum = getNums(header);
	    secondSet = num.slice(1,3);
	    backEnd = num.slice(3,6);
	    return headNum + " "+"hundred"+" "+threeDigitNum(secondSet)+" "+"thousand" + " " + fourDigitNum(backEnd);
	 }
	 else if(size >=7 && size< 8){
	 	header = arr[0];
	 	headNum = getNums(header);
	 	secondSet = num.slice(1,4);
	 	backEnd = num.slice(4,7);
	 	return headNum +" "+"million"+" "+fiveDigitNum(secondSet)+" "+fourDigitNum(backEnd);
	 }
	else if(size >=8 && size< 9){
	 	headNum = threeDigitNum(num.slice(0,2));
	 	secondSet = num.slice(2,5);
	 	backEnd = num.slice(5,8);
	 	return headNum +" "+"million"+" "+fiveDigitNum(secondSet)+" "+fourDigitNum(backEnd);
	 }
	 else if(size >=9 && size< 10){
	 	header = arr[0];
	 	headNum = getNums(header);
	 	secondSet = num.slice(1,3);
	 	midSet = num.slice(3,6);
	 	backEnd = num.slice(6,9);
	 	return headNum +" "+"hundred"+" "+threeDigitNum(secondSet)+" "+"million"+" "+fiveDigitNum(midSet)+" "+fourDigitNum(backEnd);
	 }
	 else if(size >=10 && size< 11){
	 	header = arr[0];
	 	headNum = getNums(header);
	 	secondSet = num.slice(1,4);
	 	midSet = num.slice(4,7);
	 	backEnd = num.slice(7,10);
	 	return headNum +" "+"billion"+" "+eightDigitNum(secondSet)+" "+fiveDigitNum(midSet)+" "+fourDigitNum(backEnd);
	 }
	 else if(size >=11 && size< 12){
	 	headNum = threeDigitNum(num.slice(0,2));
	 	secondSet = num.slice(2,5);
	 	midSet = num.slice(5,8);
	 	backEnd = num.slice(8,11);
	 	return headNum +" "+"billion"+" "+eightDigitNum(secondSet)+" "+fiveDigitNum(midSet)+" "+fourDigitNum(backEnd);
	 }
	 else if(size >=12 && size< 13){
	 	header = arr[0];
	 	headNum = getNums(header);
	 	secondSet = threeDigitNum(num.slice(1,3));
	 	thirdSet = num.slice(3,6);
	 	fourthSet = num.slice(6,9);
	 	backEnd = num.slice(9,12);
	 	return headNum +" "+"hundred"+" "+secondSet+" "+"billion"+" "+eightDigitNum(thirdSet)+" "+fiveDigitNum(fourthSet)+" "+fourDigitNum(backEnd);

	 }
	 else if(size >=13 && size< 14){
	 	if(num!=="1000000000000"){
	 		return "Number cannot exceed one trillion"
	 	}
	 	else{
	 		return "one trillion"
	 	}
	 
	}

   else{
   	 return "Your number exceeds maximum limits"
   }
	
};


var numCheck = function(num){
	
	var numericVal = parseInt(num);
	var revisedStr = numericVal.toString();
	if(revisedStr !== num){
		return false
	}
	else{
		return true
	}

};
  


$(document).ready(function(){
	$("form#getNumber").submit(function(event){
		var num = $("#number").val();
		var checkNum = numCheck(num);
		var zeroStart = getNums(num.slice(0,1));

		if(zeroStart===false||checkNum===false){
		  $("#number").val("");
		  $("#result1").hide();
		  $("#result2").show();
		}
		else{
		  var inWords = wordVals(num);
		  $(".numbers").text(inWords);
		  $("#number").val("");
		  $("#result1").show();
		  $("#result2").hide();
		}


	    event.preventDefault();
		
	});
});
