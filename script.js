function capitalize(){
  var input = document.getElementById("input");
  var output = document.getElementById("output");


  output.value = convert(input.value.toLowerCase());
}

function convertNumber(string){
  if (string == "0"){
   output = ":zero:";
  } else if (string == "1"){
   output = ":one:";
  } else if (string == "2"){
   output = ":two:";
  } else if (string == "3"){
   output = ":three:";
  } else if (string == "4"){
   output = ":four:";
  } else if (string == "5"){
     output = ":five:";
  } else if (string == "6"){
     output = ":six:";
  } else if (string == "7"){
     output = ":seven:";
  } else if (string == "8"){
     output = ":eight:";
  } else if (string == "9"){
     output = ":nine:";
  }

  return output;
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
