$(document).ready(function () {
  var header = $('header'),
    burger = $(".header__burger span"),
    body = $("body"),
    nav = $(".header__nav");
  burger.on("click", function () {
    burger.toggleClass("active");
    nav.toggleClass("active");
    body.toggleClass("fixed-page");
  });

  // console.log($("a[href^='#mission']"));
  var mission = document.querySelector('#mission'),
    about = document.querySelector('#about'),
    contact = document.querySelector('#contact');
  var options = {
    threshold: [1]
  };
  var callback = function callback(entries, observer) {
    var _this = this;
    entries.forEach(function (entry) {
      var mission = entry.mission,
        isIntersecting = entry.isIntersecting,
        intersectionRatio = entry.intersectionRatio;
      if (isIntersecting) {
        // console.log('da');
        console.log(_this);
        $("a[href^='#mission']").addClass('active');
      } else {
        // console.log('net');
        $("a[href^='#mission']").removeClass('active');
      }
    });
  };
  var observer = new IntersectionObserver(callback, options);
  observer.observe(mission);
  observer.observe(about);

  // console.log(observer);
  // console.log(mission);
});
