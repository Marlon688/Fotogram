const CONTENT = document.getElementById("photo-grid");

function init() {                                       //Fotogalerie Initialisieren//
    renderPhotos();
};

function renderPhotos() {                               // Foto-Thumbnails Rendern in photo-grid Container//
    CONTENT.innerHTML = ""                               
    for (let i = 0; i < photos.length; i++) {
        CONTENT.innerHTML += renderPhotoCard(photos[i], i);
    }
    addPhotoClickListeners();
};

function addPhotoClickListeners() {
    const cards = document.querySelectorAll(".photo-card");
    cards.forEach(function(card) {
        card.addEventListener("click", function() {
            const index = parseInt(card.dataset.index);
            openDialog(index);
        });
    });
};
                                                    /**
                                                     * Erstellt das HTML für eine einzelne Foto-Karte.
                                                     * @param {Object} photo - Das Foto-Objekt mit src und title
                                                     * @param {number} index - Index des Fotos im Array
                                                     * @returns {string} HTML-String der Foto-Karte
                                                     */
function renderPhotoCard(photo, index) {               
    return `
    <article class="photo-card" data-index="${index}">
    <img src="${photo.src}" alt="${photo.title}">
        
    </article >
    `;
};

document.addEventListener("DOMContentLoaded", init);