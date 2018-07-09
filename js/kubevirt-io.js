// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".fixed-top").addClass("scroll-collapse");
    } else {
        $(".fixed-top").removeClass("scroll-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);
