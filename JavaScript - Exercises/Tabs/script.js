$(document).ready(function () {

    $('.tabs-left>li').each(function (index, element) {
        $(element).attr('data-index', index);
        $('.tab-pane').eq(index).attr('data-index', index);
    })

    $(".tabs-left li").on("click", function () {
        var index = $(this).attr('data-index');
        $('.tab-pane').removeClass('active');
        $('.tab-pane[data-index="' + index + '"]').addClass('active');
        $(".tabs-left li").removeClass('active');
        $(this).addClass('active');
    });
});
