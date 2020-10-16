// const acc = document.getElementsByClassName("accordion__btn");
// let i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].onclick = function () {
//         this.classList.toggle("active");

//         this.nextElementSibling.classList.toggle("show");
//     }
// }



(function ($) {

    $('.accordion h3').click(function (j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('h3.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);