console.log('Loaded!');

//Change the html body
var element = document.getElementById('main-text');

element.innerHTML = 'new Value';

//Move the image
var img=document.getElementById('sac');
img.onclick = function() {
  img.style.marginLeft='60px'  ;
};