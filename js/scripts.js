
function typeOfFear(red, green, yellow) {
  if (typeOfFear === red) {
    $('#ruby').show();
  } else if (typeOfFear === green) {
    $('#csharp').show();
  } else (typeOfFear === yellow) 
    $('#java').show();
  };


function htmlStandFor(laughs, lovers, meatloaf) {
  if (htmlStandFor === laughs) {
    $('#ruby').show();
  } else if (htmlStandFor === lovers) {
    $('#csharp').show();
  } else (htmlStandFor === meatloaf) 
    $('#java').show();
  };

function cryTime(pizza, insect, sartre) {
  if (cryTime === pizza) {
    $('#csharp').show();
  } else if (cryTime === insect) {
    $('#ruby').show();
  } else (cryTime === sartre) 
    $('#java').show();
  };


function goOutside(none, some, all) {
  if (goOutside === none) {
    $('#java').show();
  } else if (goOutside === some) {
    $('#ruby').show();
  } else (goOutside === all) 
    $('#ruby').show();
  };

function emeational(prosciutto, ham, turkey) {
  if (emeational === prosciutto) {
    $('#java').show();
  } else if (emeational === ham) {
    $('#ruby').show();
  } else (emeational === turkey) 
    $('#csharp').show();
  };



$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var fear = typeOfFear(fear);
    var standfor = htmlStandFor(standfor);
    var cry= cryTime(cry);
    var outside= goOutside(outside);
    var emeation= emeational(emeation);
    });
});

$("#result").append(results);

