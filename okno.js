function myWindow(url) { 
const newWindow = window.open(url, 'mapa', "width=800, height=800");
 } 
document.getElementById('pokaz').addEventListener('click', function() { myWindow('mapa.html') });
