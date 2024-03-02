document.addEventListener('DOMContentLoaded', function() {
    var deviceType = '不明';

    if (window.innerWidth <= 600) {
        deviceType = 'スマートフォン';
    } else if (window.innerWidth <= 1024) {
        deviceType = 'タブレット';
    } else {
        deviceType = 'PC';
    }

    document.getElementById('deviceType').textContent = deviceType;
});
