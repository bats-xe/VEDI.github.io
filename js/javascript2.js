// Selección de los componentes
const components = document.querySelectorAll('.component-row');

const handleScroll = () => {
    components.forEach(component => {
        const rect = component.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            component.classList.add('show');
        }
    });
};

window.addEventListener('scroll', handleScroll);
