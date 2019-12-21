// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevoured = {
            devour: newDevour
        };

        // Send the PUT request.
        $.ajax("/api/devour/" + id, {
            type: "PUT",
            data: newDevoured
        }).then(
            function () {
                console.log("changed devour to", newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
            devour: $("[name=devour]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/devour", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $('.js-delete').on('click', function (event) {
        const id = $(this).data('id');

        $.ajax('/api/burger/' + id, { type: 'DELETE' }).then(() => {
            location.reload();
        });
    });
});
