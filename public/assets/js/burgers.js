// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {
    // Devauer the burger
    $(function () {
        $(".devoure").on("click", function (event) {
            let id = $(this).data("id");

            let burgerState = {
                devoured: true
            };

            // Send the PUT request.
            $.ajax("/api/burger/" + id, {
                type: "PUT",
                data: burgerState
            }).then(
                function () {
                    console.log("Changed devoured to: ", burgerState);
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        });

        //Add a new burger
        $("#burgers").on("submit", function (event) {
            // Make sure to preventDefault on a submit event.
            event.preventDefault();

            let newBurger = {
                name: $("#burger").val().trim(),
            };

            // Send the POST request.
            $.ajax("/api/burger", {
                type: "POST",
                data: newBurger
            }).then(
                function () {
                    console.log("Created new burger.");
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        });
    });

});
