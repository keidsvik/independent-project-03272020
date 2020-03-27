
function fearColorToLanguage(typeOfFear) {
  if (typeOfFear === red) {
    return 'ruby';
  } else if (typeOfFear === green) {
    return 'csharp';
  } else (typeOfFear === yellow) 
    return 'java';
  };


function whatHtml(htmlStandFor) {
  if (htmlStandFor === laughs) {
    return 'ruby';
  } else if (htmlStandFor === lovers) {
    return 'csharp';
  } else (htmlStandFor === meatloaf) 
    return 'java';
  };

  function timeCry(cryTime) {
    if (cryTime === pizza) {
      return 'ruby';
    } else if (cryTime === insect) {
      return 'csharp';
    } else (cryTime === sartre) 
      return 'java';
    };
  
  
  function timeOutside(goOutside) {
    if (goOutside === none) {
      return 'java';
    } else if (goOutside === some) {
      return 'ruby';
    } else (goOutside === all) 
      return 'csharp';
    };
  
  function meatType(emeational) {
    if (emeational === prosciutto) {
      return 'java';
    } else if (emeational === ham) {
      return 'ruby';
    } else (emeational === turkey) 
      return 'csharp';
    };

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var fearColor = document.getElementById(result);
    var htmlStandFor = document.getElementById(result);
    var meatType = document.getElementById(result);
    var timeCry = document.getElementById(result);
    var timeOutside = document.getElementById(result);
});

$("#result").append(result);
});