document.addEventListener('DOMContentLoaded', function() {
   toggleBoxes();
}, false);
function toggleBoxes() {

  var checkBox = document.getElementById("showyear1");
  var div = document.getElementById("year1");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  var checkBox = document.getElementById("showyear2");
  var div = document.getElementById("year2");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  var checkBox = document.getElementById("showyear3");
  var div = document.getElementById("year3");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  var checkBox = document.getElementById("showyear4");
  var div = document.getElementById("year4");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  input.dispatchEvent(new Event('input'));
}
