


window.onload = function() {
    let progressBar = document.getElementById("progress-bar");
    let width = 0;
    let interval = setInterval(frame, 100);

    function frame() {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }
}