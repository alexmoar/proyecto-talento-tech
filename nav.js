function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}
function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%";
}



//inicio 
const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', function(event) {
    event.preventDefault()
    const user = username.value
    const pass = password.value
    if (user === 'admin' && pass === '1234') {
        window.location.href = 'registroProduto.html'
    } else {
        alert('Usuario o contraseña incorrectos')
        username.value = ''
        password.value = ''
    }
})

// registro de productos 
const formularioRegistro = document.getElementById('formulario-registro')
formularioRegistro.addEventListener('submit', function(event) {
    console.log('registro');

})      



























// registro de producto la informacio se enviara al local storage
// const nombreProductos = [], precioProductos  = [], descripcionProductos = [], imagenProductos = []
// const buttonRegistro = document.getElementById('button-registro')
// buttonRegistro.addEventListener('click', functionREgistro );
// function functionREgistro(){
//     const nombreProducto = document.querySelector('#nombre-producto').value,
//     precioProducto = document.querySelector('#precio-producto').value,
//     descripcionProducto = document.querySelector('#descripcion-producto').value,
//     imagenProducto = document.querySelector('#imagen-producto').files[0];

//     nombreProductos.push(nombreProducto);
//     precioProductos.push(precioProducto);
//     descripcionProductos.push(descripcionProducto);
//     imagenProductos.push(imagenProducto);
    
  //  localStorage.setItem('nombre', JSON.stringify(nombreProductos));
  //  localStorage.setItem('precio', JSON.stringify(precioProductos));
 //   localStorage.setItem('descripcion', JSON.stringify(descripcionProductos));
  //  localStorage.setItem('imagen', JSON.stringify(imagenProductos));
    
 //}



//mostra los productos que se han registrado en registroProduto.html
     


