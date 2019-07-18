window.onload = function () {
    var menuStyle = getComputedStyle(nav_menu);
    btn.onclick = function () {
        if (menuStyle.display == "none") {
            nav_menu.classList.add("active");
            btn.classList.add("active");
        } else {
            nav_menu.classList.remove("active");
            btn.classList.remove("active");
        }
    };
    /* var menuStyle = getComputedStyle(nav_menu);
    btn.onclick = function () {
        if (menuStyle.display == "none") {
            navbar.classList.add("active");
            btn.classList.add("active");
        } else {
            navbar.classList.remove("active");
            btn.classList.remove("active");
        }
    } */
};

$(function () {
    $('.tab-item').not(':first').hide();
    $('.tab-box').on('click', function () {
        $('.tab-box').removeClass('active').eq($(this).index()).addClass('active');
        $('.tab-item').hide().eq($(this).index()).fadeIn(500);
    });
});