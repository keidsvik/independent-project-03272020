
function typeOfFear(red, green, yellow) {
  if (fear === red) {
    console.log('Very CSS');
  } else if (fear === green) {
    console.log('Very Ruby');
  } else (fear === yellow) 
    console.log('Very C#');
  }
};

function htmlStandFor(laughs, lovers, meatloaf) {
  if (standfor === laughs) {
    console.log('Very CSS');
  } else if (standfor === lovers) {
    console.log('Very Ruby');
  } else (standfor === meatloaf) 
    console.log('Very C#');
  }
};

function cry(pizza, insect, sartre) {
  if (cry === pizza) {
    console.log('Very CSS');
  } else if (cry === insect) {
    console.log('Very Ruby');
  } else (cry === sartre) 
    console.log('Very C#');
  }
};

function outside(none, some, all) {
  if (outside === none) {
    console.log('Very CSS');
  } else if (outside === some) {
    console.log('Very Ruby');
  } else (outside === all) 
    console.log('Very C#');
  }
};

function emeation(prosciutto, ham, turkey) {
  if (emeation === prosciutto) {
    console.log('Very CSS');
  } else if (emeation === ham) {
    console.log('Very Ruby');
  } else (emeation === turkey) 
    console.log('Very C#');
  }
};


$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var fear = $(input:radio[name=fear]:checked).val();
    var standfor = $(input:radio[name=standfor]:checked).val();
    var cry= $(input:radio[name=cry]:checked).val();
    var outside= $(input:radio[name=outside]:checked).val();
    var emeation= $(input:radio[name=emeation]:checked).val();

    $("#result").append(result);

  });
});