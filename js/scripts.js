
function fearColorToLanguage(fearColor) {
  if (fearColor === 'red') {
    ruby ++; 
  } else if (fearColor === 'green') {
    csharp ++; 
  } else (fearColor === 'yellow') 
    java ++; 
  };

function htmlToLanguage(standFor) {
  if (standFor === 'laughs') {
     ruby ++; 
  } else if (standFor === 'lovers') {
     csharp ++; 
  } else (standFor === 'meatloaf') 
    java ++; 
  };

  function cryToLanguage(cryTime) {
    if (cryTime === 'pizza') {
      ruby ++;
    } else if (cryTime === 'insect') {
      csharp ++; 
    } else (cryTime === 'sartre') 
      java ++; 
    };
  
  
  function outsideToLanguage(outsideTime) {
    if (outsideTime === 'none') {
      java ++;
    } else if (outsideTime === 'some') {
      ruby ++;
    } else (outsideTime === 'all') 
      csharp ++;
    };
  
  function meatTypeToLanguage(meatType) {
    if (meatType === 'prosciutto') {
      java ++;
    } else if (meatType === 'ham') {
      ruby ++;
    } else (meatType === 'turkey') 
      csharp ++;
    };

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var ruby = 0; 
    console.log(ruby);
    var java = 0; 
    console.log(java);
    var csharp = 0;
    console.log(csharp)
    var fearColor = $("input:radio[name=fear]:checked").val();
    console.log(fearColor)
    var stand = $("input:radio[name=standFor]:checked").val();
    console.log(stand)
    var meatType = $("input:radio[name=emeation]:checked").val();
    console.log(meatType)
    var cryTime = $("input:radio[name=cry]:checked").val();
    console.log(cryTime)
    var outsideTime = $("input:radio[name=outside]:checked").val();
    console.log(outsideTime)

    console.log($("#result"));
    $("#result").show(result);
    
  });
});
