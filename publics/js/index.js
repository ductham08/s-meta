
$(document).ready(function() {

    $(".menu-toggle").click(function() {
        $(".menu").toggleClass("menu-collapsed");
    });

    // NAV CONTENT

    $(".content .btn-nav-content").click(function() {
        $(".content .nav-content").toggleClass("active");
    });

    $(".nav-content .item-nav-content").click(function() {
        $(".nav-content .item-nav-content").removeClass("active");
        $(this).addClass("active");
    });

    // item-head-tab DOWN
    $(".select-option .drop").click(function() {
        $(".select-option .option").toggleClass("active");
    });

    // DROP DOWN
    $(".head-table .item-head-table").click(function() {
        $(".head-table .item-head-table").removeClass("active");
        $(this).addClass("active");
    });

    // PICK DATE
    


});