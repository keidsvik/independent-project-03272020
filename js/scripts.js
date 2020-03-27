$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var fear = $(input:radio[name=fear]:checked).val();
    var standfor = $(input:radio[name=standfor]:checked).val();
    var cry= $(input:radio[name=cry]:checked).val();
    var outside= $(input:radio[name=outside]:checked).val();
    var emeation= $(input:radio[name=emeation]:checked).val();
  });
});