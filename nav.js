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
// registro de producto la informacio se enviara al local storage
const nombreProducto = document.getElementById('nombre-producto')
const precioProducto = document.getElementById('precio-producto')
const descripcionProducto = document.getElementById('descripcion-producto')
const imagenProducto = document.getElementById('imagen-producto')
const buttonRegistro = document.getElementById('button')

buttonRegistro.addEventListener('click', function(event) {
    event.preventDefault()
    const nombre = nombreProducto.value
    const precio = precioProducto.value
    const descripcion = descripcionProducto.value
    const imagen = imagenProducto.files[0]
    localStorage.setItem('nombre', nombre)
    localStorage.setItem('precio', precio)
    localStorage.setItem('descripcion', descripcion)
    localStorage.setItem('imagen', imagen)
    
})

//mostra los productos que se han registrado en registroProduto.html
function mostrarRegistro() {
    const nombre = localStorage.getItem('nombre')
    const precio = localStorage.getItem('precio')
    const descripcion = localStorage.getItem('descripcion')
    const imagen = localStorage.getItem('imagen')
    document.getElementById('nombre-producto').value = nombre
    document.getElementById('precio-producto').value = precio
    document.getElementById('descripcion-producto').value = descripcion
    document.getElementById('imagen-producto').files[0] = imagen
}   
mostrarRegistro()


  
