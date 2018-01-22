$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/users").then(function(data) {

    $("#inputUserEmail").val(data.email);
    $("#userform").attr("id", data.id);

   
  });
});
