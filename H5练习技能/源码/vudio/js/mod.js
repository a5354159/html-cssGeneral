var shadow = document.querySelector(".shadow");
var main = document.querySelector(".main");
var box = document.querySelector(".box");
var startTime = document.querySelector(".startTime");
var endTime = document.querySelector(".endTime");
var progress = document.querySelector(".progress");
var progressBtn = document.querySelector(".progressBtn");
var progressContent = document.querySelector(".progressContent");
var stop = document.querySelector(".stop");
var audio = document.querySelector("audio");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");

var ind = 0;
flag = false;
var arr = [{
    music: "./vedio/xiaobaitu.mp3",
    bg: "./image/talk_share_bg.png"
}, {
    music: "./vedio/yanhuo.mp3",
    bg: "./image/that.jpg"
}, {
    music: "./vedio/buliaoliaozhi.mp3",
    bg: "./image/4.jpg"
}]
stop.onclick = function() {
    if (audio.paused) {
        audio.play();
        this.classList.add('active');
        main.classList.add('moving');
    } else {
        audio.pause();
        this.classList.remove('active');
        main.classList.remove('moving');
    };
};
next.onclick = function() {
    flag = true;
    ind++;
    if (ind > arr.length - 1) {
        ind = 0;
    };
    audio.setAttribute('src', arr[ind].music);
};
prev.onclick = function() {
    flag = true;
    ind--;
    if (ind < 0) {
        ind = arr.length - 1;
    };
    audio.setAttribute('src', arr[ind].music);
};
audio.oncanplaythrough = function() {
    if (flag) {
        this.play();
        stop.classList.add('active');
        main.classList.add('moving');
        shadow.style.backgroundImage = 'url(' + arr[ind].bg + ')';
        box.style.backgroundImage = 'url(' + arr[ind].bg + ')';
        // endTime.innerHTML = getM(Math.floor(this.duration));
    };
};