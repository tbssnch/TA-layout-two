document.addEventListener('DOMContentLoaded', function() {
  var index = 0;
  carousel();

  function carousel() {
    var slides = document.getElementsByClassName('slide');
    var i;
    for(i = 0; i < slides.length; i++) {
      slides[i].style.opacity = 0;
    }
    index++;
    if(index > slides.length) {
      index = 1;
    }
    slides[index - 1].style.opacity = 1;
    setTimeout(carousel, 3000);
  }
});//DOM LOADED Event end
