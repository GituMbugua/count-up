$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    var total = 0;
    var first = $("input#input1").val();
    var second = $("input#input2").val();
    for (var value = 0; value <= first; value += second) {
      total += value;
      alert(value);
    };
  });
});
