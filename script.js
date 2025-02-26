// Desplazamiento suave al hacer clic en el título
document.getElementById('titulo-tienda').addEventListener('click', function() {
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
});