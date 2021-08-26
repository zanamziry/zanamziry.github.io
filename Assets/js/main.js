//Main Function
$(window).on('load', function () {
  loadingScreen();
  initializeAOS();
  InitializeIframe();
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      var scrollto = $(initial_nav).offset().top - scrolltoOffset;
      $('html, body').animate({
        scrollTop: scrollto
      }, 1500, 'easeInOutExpo');
    }
  }
});


document.querySelector('.navbar-toggler').addEventListener("click", function(){
  var s = document.querySelector('.navbar-toggler').classList;
  if (s.contains('collapsed')){
    $('body').addClass('lock');
  }
  else {
    $('body').removeClass('lock');
  }
});

function loadingScreen() {
  if ($('#preloader').length) {
    $('#preloader').addClass('hide');
  };
}

function initializeAOS() {
  AOS.init({
    duration: 500,
    once: true,
  });
}

function InitializeIframe(){
  document.querySelector('#root').height=document.querySelector('#root').contentWindow.document.body.scrollHeight;
}

// Smooth scroll for the navigation menu and links with .scrollto classes
var scrolltoOffset = $('#home').outerHeight() - 1;
$(document).on('click', '.nav-item a, .scrollto', function (e) {
  if (location.pathname.replace('/', '') == this.pathname.replace('/', '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    if (target.length) {
      e.preventDefault();
      var scrollto = target.offset().top - scrolltoOffset;

      if ($(this).attr("href") == '#home') {
        scrollto = 0;
      }

      $('html, body').animate({
        scrollTop: scrollto
      }, 1500, 'easeInOutExpo');

      if ($(this).parents('.nav-item').length) {
        $('.navbar-nav .active').removeClass('active');
        $(this).closest('li').addClass('active');
      }
      return false;
    }
  }
});

// Activate smooth scroll on page load with hash links in the url
$(document).ready(function () {
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      var scrollto = $(initial_nav).offset().top - scrolltoOffset;
      $('html, body').animate({
        scrollTop: scrollto
      }, 1500, 'easeInOutExpo');
    }
  }
});