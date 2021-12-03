const frame = document.getElementById('root');

$(window).on('load', function () {
  loadingScreen = $('#preloader');
  if (loadingScreen.length) {
    loadingScreen.addClass('hide');
  };
  InitializeIframe();
});

$('.navbar-toggler').on("click", function(){
  var nav_toggle = document.querySelector('.navbar-toggler');
  if (nav_toggle.classList.contains('collapsed')){
    $('body').addClass('lock');
  }
  else {
    $('body').removeClass('lock');
  }
});

function InitializeIframe(){
  try {
    //70 is for the bottom of the page to not get covered by the footer
    frame.height=frame.contentWindow.document.body.scrollHeight + 70;
  } catch (error) {
    console.error(error);
  }
}
  
$('.nav-link').on('click',function(){
  if(this.pathname != '/')
    frame.src = this.pathname;
    $('.navbar-collapse').collapse('hide');
    document.querySelector('body').classList.remove('lock');
  return false;
});