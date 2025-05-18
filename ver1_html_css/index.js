
//Toggle photos of sidebar menu
$(".side-bar-img").on("click", function () {
    const img = $(this);
    const currentSrc = img.attr("src");
    const newSrc = currentSrc.includes("side-menu-open.png") 
        ? "Content/Images/side-menu-closed.png" 
        : "Content/Images/side-menu-open.png";

    img.fadeOut(50, function () {
        img.attr("src", newSrc).fadeIn(50);
    });
});

// Toggle appearence of sidebar menu
$(".side-bar-img").on("click", function () {
    const leftArrow = $("svg.arrow-bar-left");
    const sideBarItems = $(".side-bar-items");

    if (leftArrow.is(":visible")) {
        leftArrow.fadeOut(100);
    } else {
        leftArrow.fadeIn(100)
    }

    sideBarItems.toggleClass("hidden");
});

// Makes sidebar appear after navbar disappear
function checkNavScroll() {
    const navbar = $("#navbar");
    const navbarBottom = navbar.offset().top + navbar.outerHeight();
    const scrollTop = $(window).scrollTop();

    if (scrollTop > navbarBottom) {
        $("#sidebar").fadeIn(200);
    } else {
        $("#sidebar").fadeOut(200);
    }
}
// Run when the page scrolls
$(window).on("scroll", checkNavScroll);

// ALSO run immediately on page load
$(document).ready(checkNavScroll);

//Change sidebar arrow based on window width
function updateSvgImg() {
    const windowWidth = $(window).width();
    const svgSourceLeft = $(".arrow-bar-left")
    const svgSourceRight = $(".arrow-bar-right")
    var svgNewLeft = "";
    var svgNewRight = "";

    if (windowWidth < 1000) {
        svgNewLeft = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5M8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6"/>
</svg>`;
        svgNewRight = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5m-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5"/>
</svg>`;
    } else {
        svgNewLeft = `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="arrow-bar-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"
          />
        </svg>
        `;
        svgNewRight = `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="arrow-bar-right side-bar-items hidden"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"
          />
        </svg>`;
    }
    svgSourceLeft.html(svgNewLeft);
    svgSourceRight.html(svgNewRight);
}

$(document).ready(updateSvgImg)
$(window).on("resize", updateSvgImg)