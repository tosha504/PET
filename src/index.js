$(document).ready(function() { 
const header = $('header'),
  burger = $(".header__burger span"),
  body = $("body"),
  nav = $(".header__nav");

  burger.on("click", function() {
    burger.toggleClass("active");
    nav.toggleClass("active");
    body.toggleClass("fixed-page");
  }); 

  // console.log($("a[href^='#mission']"));
const mission = document.querySelector('#mission'),
about = document.querySelector('#about'),
contact = document.querySelector('#contact');

const options = {
  threshold: [1]
}


const callback = function (entries, observer) {
  entries.forEach( entry => {
    const {mission, isIntersecting, intersectionRatio} = entry;
    if(isIntersecting) {
      // console.log('da');
      console.log(this);
      $("a[href^='#mission']").addClass('active');
    }else {
      // console.log('net');
      $("a[href^='#mission']").removeClass('active');
    }
  });
}
let observer = new IntersectionObserver(callback, options);

observer.observe(mission);
observer.observe(about);

// console.log(observer);
// console.log(mission);

})
