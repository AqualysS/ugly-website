document.addEventListener('DOMContentLoaded', function() {
    const colors = ['red', 'orange', 'yellow', 'lime', 'cyan', 'blue', 'magenta'];
    let index = 0;
    
    setInterval(function() {
        document.getElementById('rainbow-text').style.color = colors[index];
        index = (index + 1) % colors.length;
    }, 300);
});