
function typeOfFear(red, green, yellow) {
  if (typeOfFear === red) {
    return 'ruby';
  } else if (typeOfFear === green) {
    return 'csharp';
  } else (typeOfFear === yellow) 
    return 'java';
  };


function htmlStandFor(laughs, lovers, meatloaf) {
  if (htmlStandFor === laughs) {
    return 'ruby';
  } else if (htmlStandFor === lovers) {
    return 'csharp';
  } else (htmlStandFor === meatloaf) 
    return 'java';
  };

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var typeOfFear = document.getElementById("red", "yellow", "green");
    var htmlStandFor= document.getElementbyId("laughs", "lovers", "meatloaf");
});

$("#result").append(result);
});