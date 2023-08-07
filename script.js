const wallpapersContainer = document.querySelector('.wallpapers-container');

const wallpapers = [
    { title: 'Conor McGregor', imageUrl: 'conor_mcgregor.jpg' },
    { title: 'Khabib Nurmagomedov', imageUrl: 'khabib.jpg' },
    // Add more wallpaper entries
];

function displayWallpapers() {
    wallpapersContainer.innerHTML = '';

    wallpapers.forEach(wallpaper => {
        const wallpaperEntry = document.createElement('div');
        wallpaperEntry.classList.add('wallpaper-card');
        wallpaperEntry.innerHTML = `
            <img src="wallpapers/${wallpaper.imageUrl}" alt="${wallpaper.title}">
            <p>${wallpaper.title}</p>
        `;
        wallpapersContainer.appendChild(wallpaperEntry);
    });
}

displayWallpapers();
