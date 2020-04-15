$(document).ready(function() {
  console.log('loaded')

  var $header = $('header');
  var $sticky = $header.before($header.clone().addClass("sticky"));

  $(window).on("scroll", function(){
    var scrollFromTop = $(window).scrollTop();
    $("body").toggleClass("scroll", (scrollFromTop > 350));
  });

  console.log("hi");

// Smooth Scroll
  $('.menu li a[href^="#"]').on('click', function(e){
    e.preventDefault();
    var target = $(this.hash);
    if (target.length) {
      $('html, body').stop().animate({
        scrollTop: target.offset().top -80
      }, 1000);
    }
  });

  $('.wrapper li a[href^="#"]').on('click', function(e){
    e.preventDefault();
    var target = $(this.hash);
    if (target.length) {
      $('html, body').stop().animate({
        scrollTop: target.offset().top -80
      }, 1000);
    }
  });

  // Responsive Menu
  var body = $('body');
  var menuTrigger = $('.js-menu-trigger');
  var mainOverlay = $('.js-main-overlay');

  menuTrigger.on('click', function(){
    body.addClass('menu-active');
    console.log("CLICK");
  });

  mainOverlay.on('click', function(){
    body.removeClass('menu-active');
  });

  $('.menu li a').on('click', function(){
    $('body').removeClass("menu-active");
  });

  // Scroll Reveal
  window.sr = ScrollReveal({ reset: true });
  sr.reveal('.reveal', { duration: 900 });
  

});
