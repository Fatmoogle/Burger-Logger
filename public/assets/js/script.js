// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devourBtn").on("click", function(event) {
      var id = $(this).data("id");
      var ifDevoured = $(this).data("devoured");
  
      var devouredValue = {
        devoured: ifDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredValue
      }).then(
        function() {
          console.log("Burger DEVOURED!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#dab").val().trim()
      };
      console.log(newBurger);
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("New burger added!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });  
});
  