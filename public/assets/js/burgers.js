$(document).ready(() => {

    // When user clicks submit, this api post will send input
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerInput").val().trim(),
            devoured: false
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        );
    });

    // Event listener for the devour button to update it.
    $(".devour").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr("data-id");
        console.log(id);


        $.ajax("/api/burgers/" + id, {
            type: "PUT",
        }).then(
            function() {
                location.reload();
            }
        );
    });
});