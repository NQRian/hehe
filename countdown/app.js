const yourDate = new Date("2024-04-05T10:00:00");
const music = ['noinaycoanh'];

document.addEventListener('DOMContentLoaded', function(){
    var rootTime = document.querySelector("time");

    document.querySelector("anni").textContent = `${(yourDate.getDate()>9)?yourDate.getDate():"0"+yourDate.getDate()}-${(yourDate.getMonth()>8)?(yourDate.getMonth()+1):"0"+(yourDate.getMonth()+1)}-${yourDate.getFullYear()}`;
    
    document.querySelector("date").textContent = Math.floor( Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24)+" DAYS";

    function olock() {
        var today = new Date(),
        hrs = (Math.floor( Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
        min = (Math.floor( Math.floor((today - yourDate) / 1000) / 60)) % 60,
        sec =  Math.floor((today - yourDate) / 1000) % 60;
        rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
    }
    olock();
    var timer = setInterval(function(){olock()}, 1000);

    let currentIndex = 0;

    function playNextSong() {
        if (currentIndex >= music.length) {
            currentIndex = 0; // Quay lại bài đầu tiên khi đã phát hết danh sách
        }

        let audioElement = document.querySelector("audio");
        audioElement.setAttribute("src", `music/${music[currentIndex]}.mp3`);
        audioElement.play();
        currentIndex++;
    }

    // Thiết lập ban đầu để phát bài đầu tiên
    playNextSong();

    // Lắng nghe sự kiện 'ended' để phát bài tiếp theo
    document.querySelector("audio").addEventListener("ended", playNextSong);

    // Thêm phần tử <div id='mask'> vào cuối <body>
    document.getElementsByTagName("body")[0].insertAdjacentHTML(
        "beforeend",
        "<div id='mask'></div>"
    );

}, false);
