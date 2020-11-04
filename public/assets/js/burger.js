// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devour-it").on("click", function (event) {
        var id = $(this).data("id");

        var newDevourState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            "burger_name": $("#burger").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new Burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    /*$("deleteBtn").on("click", function (event) {
        event.preventDefault();

        var deleteItem = {
            id: $("")
        }

        $.ajax("/api/cats", {
            type: "DELETE",
            data: newCat
        }).then(
            function () {
                console.log("deleted cat");
                // Reload the page to get the updated list
                location.reload();
            }
        );

    })*/
});
