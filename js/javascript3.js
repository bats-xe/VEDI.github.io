// Seleccionar puntos de la línea del tiempo y popups de información
const timelinePoints = document.querySelectorAll('.timeline-point');
const infoPopups = document.querySelectorAll('.info-popup');

// Evento para mostrar el popup de información
timelinePoints.forEach(point => {
    point.addEventListener('click', () => {
        // Ocultar cualquier popup visible
        infoPopups.forEach(popup => popup.style.display = 'none');

        // Mostrar el popup asociado al punto clickeado
        const infoId = point.getAttribute('data-info');
        document.getElementById(infoId).style.display = 'block';
    });
});

// Evento para cerrar el popup al hacer clic en la X
infoPopups.forEach(popup => {
    const closeButton = popup.querySelector('.close-btn');
    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});
