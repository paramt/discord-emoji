function capitalize(){
  var input = document.getElementById("input");
  var output = document.getElementById("output");


  output.value = convert(input.value.toLowerCase());
}

function convertNumber(string){
  var numOutput = '';

  if (string == "0"){
   numOutput = ":zero:";
  } else if (string == "1"){
   numOutput = ":one:";
  } else if (string == "2"){
   numOutput = ":two:";
  } else if (string == "3"){
   numOutput = ":three:";
  } else if (string == "4"){
   numOutput = ":four:";
  } else if (string == "5"){
     numOutput = ":five:";
  } else if (string == "6"){
     numOutput = ":six:";
  } else if (string == "7"){
     numOutput = ":seven:";
  } else if (string == "8"){
     numOutput = ":eight:";
  } else if (string == "9"){
     numOutput = ":nine:";
  }

  return numOutput;
}

function convert(input){
  var includeNonConvertableLetters = false;

  var string = input.split('');
  var output = '';

  for(n=0; n<string.length; n++){
    if (!/[^a-zA-Z]/.test(string[n])){
      output = output + ":regional_indicator_" + string[n] + ": ";
    } else if (string[n] == " "){
      output = output + "   ";
    } else if (!isNaN(string[n])){
      output = output + convertNumber(string[n]);
    } else if (string[n] == "#"){
      output = output + ":hash:";
    } else if (string[n] == "*"){
      output = output + ":asterisk:";
    } else if (string[n] == ">"){
      output = output + ":arrow_forward:";
    } else if (string[n] == "<"){
      output = output + ":arrow_backward:";
    } else if (string[n] == "!"){
      output = output + ":exclamation:";
    } else if (string[n] == "+"){
      output = output + ":heavy_plus_sign:";
    } else if (string[n] == "-" || string[n] == "−"){
      output = output + ":heavy_minus_sign:";
    } else if (string[n] == "$"){
      output = output + ":heavy_dollar_sign:";
    } else if (string[n] == "÷"){
      output = output + ":heavy_division_sign:";
    } else if (string[n] == "×"){
      output = output + ":heavy_multiplication_x: ";
    } else if (includeNonConvertableLetters){
      output = output + string[n];
    }
  }

  return output;
};

window.onload = function(){
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  var left = w/10 - 10;

  if(document.getElementById("demo").width > w*0.8){
    document.getElementById("demo").style.width = w*0.8 + "px";
  }
}

function copy(){
  var copyText = document.getElementById("output");
  copyText.select();
  document.execCommand("copy");
}
