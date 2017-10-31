$(document).ready(function () {
    console.log('script loaded');
    $(function () {
        $('nav a').on('click', function () {
            console.log('.nav a click triggered');
            if ($('.navbar-toggler').css('display') != 'none') {
                $(".navbar-toggler").trigger("click");
                console.log("click was triggered");
            }
        });
    });



    document.getElementById("testButton").addEventListener("click", function () {
        $("#tester").html("button was pressed!");
    });

});
