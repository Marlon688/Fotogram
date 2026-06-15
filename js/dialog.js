const DIALOG = document.getElementById("photo-dialog")
const DIALOG_INNER = document.getElementById("dialog-inner")

let currentIndex = 0;
/**Öffnet Dialog und zeigt das Foto am gegebenen Index. */
function openDialog(index) {    /* @param {number} index- Index des Fotos im photo Array */
    currentIndex = index;
    updateDialog();
    DIALOG.showModal();
};

function closeDialog() {         /**Schließt den Dialog. */
    DIALOG.close();
}

function nextPhoto() {          /**Zeigt das nächste Foto im Dialog */
    currentIndex = (currentIndex + 1) % photos.length;
    updateDialog();
};

function prevPhoto() {          /**Zeigt das vorherige Foto im Dialog */
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    updateDialog();
};

function updateDialog() {       /**Aktualisiert den Dialog-Inhalt mit aktuellen Foto*/
    const photo = photos[currentIndex];
    DIALOG_INNER.innerHTML = `
        ${renderDialogHeader(photo)}
        ${renderDialogImage(photo)}
        ${renderDialogNav()}
    
    `;
};

function renderDialogHeader(photo) {
    return `
    <header class="dialog-header">
        <h2 class="dialog-title">${photo.title}</h2>

        <button class="dialog-close-btn"
         onclick="closeDialog()" 
         aria-label="Close dialog">
         <img src="./assets/icons/close.png" alt="close">
        </button>
    </header>
    `;
}

function renderDialogImage(photo) {
    return `
    <figure class="dialog-figure">
      <img class="dialog-image" src="${photo.src}" alt="${photo.title}">
    </figure>
    `;
};

function renderDialogNav() {
    return `
    <nav class="dialog-nav" aria-label="Photo navigation">
     <button class="dialog-arrow-btn" onclick="prevPhoto()" aria-label="Previous photo"><img src="./assets/icons/Union-left.png" alt="vorheriges Bild"></button>
     
     <span class="dialog-counter">${currentIndex + 1} / ${photos.length}</span>
     <button class="dialog-arrow-btn" onclick="nextPhoto()" aria-label="Next photo"><img src="./assets/icons/Union-right.png" alt="nächstes Bild"></button>
     </nav>
     `;
};

DIALOG.addEventListener("click", function (e) {
    if (e.target === DIALOG) {
        closeDialog();
    }
});



// DIALOG.addEventListener("click", function(e) {
//     const rect = DIALOG.getBoundingClientRect();
//     const clickedOutside =
//     e.clientX < rect.left ||
//     e.clientX > rect.right ||
//     e.clientY < rect.top ||
//     e.clientY > rect.bottom;

//     if (clickedOutside){
//         closeDialog();
//     }
// });

