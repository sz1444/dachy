var li = document.querySelectorAll('.project ul li');
var ul = document.querySelector('.project ul');
var right = document.querySelector('#right');
var left = document.querySelector('#left');
var show = document.querySelector('.show');
var bars = document.querySelector('.fa-bars');
var times = document.querySelector('.fa-times');
var menu = document.querySelector('nav ul');



bars.addEventListener('click', menuOpen);
times.addEventListener('click', menuClose);

function menuOpen() {
    menu.style.top = '0';
    bars.style.display = 'none';
    times.style.display = 'block';
}

function menuClose() {
    menu.style.top = '-400px';
    bars.style.display = 'block';
    times.style.display = 'none';
}




for (var i = 0; i < li.length; i++) {
    li[i].addEventListener('click', showImg);
}


function showImg() {
    document.querySelector('.close').addEventListener('click', close);
    show.childNodes[1].src = this.firstChild.src
    show.style.visibility = "visible";
    show.style.opacity = "1";

    function close() {
        show.style.visibility = "hidden";
        show.style.opacity = "0";
    }
}