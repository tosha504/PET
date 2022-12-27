$(document).ready(function() { 
const header = $('header'),
  burger = $(".header__burger span"),
  body = $("body"),
  nav = $(".header__nav"),
  mission = document.querySelector('#mission'),
  about = document.querySelector('#about'),
  contact = document.querySelector('#contact');
 

  burger.on("click", function() {
    burger.toggleClass("active");
    nav.toggleClass("active");
    body.toggleClass("fixed-page");
  }); 

  $("a[href^='#']").on("click", function(e) {
    const target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top - 90 }, 1000);       
  });
                           

    
 
  let options = { }
  function opt() {
    if($( window ).width() > 1400) {
      options = {
        threshold: 0.9
      }
    } 
    if($( window ).width() < 1400) {
      options = {
        threshold: 0.8
      }
    }
    if($( window ).width() < 1005) {
      options = {
        threshold: 0.3
      }
    }

  }

  opt();
  $( window ).resize(function() {
    opt();
  })
  
  let arr = [mission, about, contact]

  const callback = function (entries, observer) {
    entries.forEach( entry => {
      const { isIntersecting, intersectionRatio} = entry;
      if(isIntersecting ) {
        // console.log(entry);
        $(`a[href^='#${entry.target.id}']`).addClass('active');
      }else {
        $(`a[href^='#${entry.target.id}']`).removeClass('active');
      }
    });
  }

  let observer = new IntersectionObserver(callback, options);
  arr.forEach(e => {
    observer.observe(e);
  })

   //check to see if the submited cookie is set, if not check if the popup has been closed, if not then display the popup
   if( getCookie('popupCookie') != 'submited'){ 
    $('.cookies').css("display", "block").hide().fadeIn(2000);
    }

    $('a.submit').click(function(){
    $('.cookies').fadeOut();
    //sets the coookie to five minutes if the popup is submited (whole numbers = days)
    setCookie( 'popupCookie', 'submited', 7 );
    });

    function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
      }
      return "";
    }

    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
  
}); 
