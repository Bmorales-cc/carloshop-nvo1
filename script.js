// Desplazamiento suave al hacer clic en el título
document.getElementById('titulo-tienda').addEventListener('click', function() {
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
});
const contenedorProductos = document.querySelector('.contenedor-productos');

// Pausar la animación al pasar el mouse
contenedorProductos.addEventListener('mouseenter', () => {
    contenedorProductos.style.animationPlayState = 'paused';
});

// Reanudar la animación al quitar el mouse
contenedorProductos.addEventListener('mouseleave', () => {
    contenedorProductos.style.animationPlayState = 'running';
});