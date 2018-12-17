// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {
    // Devauer the burger
    $(function () {
        //Add a new customer
        $("#customers").on("submit", function (event) {
            // Make sure to preventDefault on a submit event.
            event.preventDefault();

            let burgerId = $(".devoure").data("id");

            let newCustomer = {
                name: $("#customer").val().trim(),
                id: burgerId
            };

            // Send the POST request.
            $.ajax("/api/customer", {
                type: "POST",
                data: newCustomer
            }).then(
                function () {
                    console.log("Created new customer: ", newCustomer);
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        });
    });

});
