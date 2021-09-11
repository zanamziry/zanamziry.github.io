var frame = document.getElementById('root')

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
    frame.height=frame.contentWindow.document.body.scrollHeight;
  } catch (error) {
    console.error(error);
  }
}
  
$('.nav-link').on('click',function(){
  if(this.pathname != '/')
    frame.src = this.pathname;
  return false;
});