
let galeri = document.querySelector('.galeri');


for (let i = 1; i <= 10; i++) {
    let foto = document.createElement('div');
    foto.className = 'foto';
    foto.id = `foto-${i}`;

    let img = document.createElement('img');
    img.src = `foto.jpg`;
    img.alt = `Foto ${i}`;

    foto.appendChild(img);
    galeri.appendChild(foto);
}


galeri.querySelectorAll('.foto').forEach((foto, index) => {
    foto.addEventListener('click', () => {
        playSound(index + 1);
        zoomImage(foto.querySelector('img'));
    });
});

function playSound(index) {
    let suara = new Audio(`suara.mp3`);
    suara.play();
}

function zoomImage(image) {
    image.style.transform = 'scale(1.2)';
    setTimeout(() => {
        image.style.transform = 'scale(1)';
    }, 2000);
}

// Check if the image is clicked
function checkClick(foto) {
    if (foto.classList.contains('foto')) {
        playSound(foto.id.split('-')[1]);
        zoomImage(foto.querySelector('img'));
    } else {
        console.log('Not a photo');
    }
}