console.log('Loaded!');

//Change the html body
var element = document.getElementById('main-text');
element.innerHTML='new Value';

//Move the image
var img=document.getElementById('sac');
var margineLeft=0;
function moveRight(){
    margineLeft=margineLeft+1;
    img.style.marginLeft=margineLeft+'px';
}

img.onclick = function() {
    var interval = setInterval(moveRight,50);
};