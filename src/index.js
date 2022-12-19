const header = $('header'),
  burger = $(".header__burger span"),
  body = $("body"),
  nav = $(".header__nav");

  burger.on("click", function() {
    burger.toggleClass("active");
    nav.toggleClass("active");
    body.toggleClass("fixed-page");
  }); 