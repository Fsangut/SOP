$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('nav').toggleClass('active')
    })
})

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navHead").style.top = "0";
  } else {
    document.getElementById("navHead").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

$(document).on('click','ul li ', function(){
  $(this).addClass('active').siblings().removeClass('active')
})

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (!isChrome){
      $('#iframeAudio').remove()
  }
  else {
      $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
  }