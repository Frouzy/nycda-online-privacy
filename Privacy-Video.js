$(document).ready(function () {
  // when we click on the h1 it should alert the user
  $("#myIdHere").click(function(){
    var num = "<h1>My header</h1>";
    var currentHTML = $("#myIdHere").html();
    $("#myIdHere").html(num + currentHTML);
  });

  // document.getElementById("myIdHere").innerHTML = num;
});