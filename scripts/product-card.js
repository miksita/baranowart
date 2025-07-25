// функция смены картины
function swapImages(clickedThumbnail) {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    const tempSrc = mainImage.src;

    mainImage.src = clickedThumbnail.src;
    clickedThumbnail.src = tempSrc;

    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    clickedThumbnail.classList.add('active');
}

document.getElementById('mainImage').addEventListener('click', function () {
    const activeThumbnail = document.querySelector('.thumbnail.active');
    swapImages(activeThumbnail);
});

//функция смены инфы по нажатию кнопки
document.addEventListener('DOMContentLoaded', function () {
    switchTab('artwork-info');
});

function switchTab(tabId) {
    document.querySelectorAll('.btn-tab').forEach(btn => {
        btn.classList.remove('active');
    });

    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    if (tabId === 'artwork-info') {
        document.querySelector('button[onclick="switchTab(\'artwork-info\')"]').classList.add('active');
        document.getElementById('artwork-info-tab').classList.add('active');
    } else {
        document.querySelector('button[onclick="switchTab(\'delivery\')"]').classList.add('active');
        document.getElementById('delivery-tab').classList.add('active');
    }
}

