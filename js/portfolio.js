$(document).ready(function () {
    console.log('script loaded');
    //close mobile nav if it's open when link is clicked
    $(function () {
        $('nav a').on('click', function () {
            console.log('.nav a click triggered');
            if ($('.navbar-toggler').css('display') != 'none') {
                $(".navbar-toggler").trigger("click");
                console.log("click was triggered");
            }
        });
    });

});
