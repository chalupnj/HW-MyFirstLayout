$(document).ready(function() {

  var $header = $('header');
  var $sticky = $header.before($header.clone().addClass("sticky"));

  $(window).on("scroll", function(){
    var scrollFromTop = $(window).scrollTop();
    $("body").toggleClass("scroll", (scrollFromTop > 350));
  });

  // // Masonry
  // $('.grid').masonry({
  //   itemSelector: '.grid-item',
  //   columnWidth: '.grid-sizer',
  //   percentPosition: true,
  //   // fitWidth: true
  // });

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
  });

  mainOverlay.on('click', function(){
    body.removeClass('menu-active');
  });

  $('.menu li a').on('click', function(){
    $('body').removeClass("menu-active");
  });

});
