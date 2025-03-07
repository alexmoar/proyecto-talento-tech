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
const nombreProductos = [], precioProductos  = [], descripcionProductos = [], imagenProductos = []
const buttonRegistro = document.getElementById('button-registro')
buttonRegistro.addEventListener('click', functionREgistro );
function functionREgistro(){
    const nombreProducto = document.querySelector('#nombre-producto').value,
    precioProducto = document.querySelector('#precio-producto').value,
    descripcionProducto = document.querySelector('#descripcion-producto').value,
    imagenProducto = document.querySelector('#imagen-producto').files[0];

    nombreProductos.push(nombreProducto);
    precioProductos.push(precioProducto);
    descripcionProductos.push(descripcionProducto);
    imagenProductos.push(imagenProducto);
    
  //  localStorage.setItem('nombre', JSON.stringify(nombreProductos));
  //  localStorage.setItem('precio', JSON.stringify(precioProductos));
 //   localStorage.setItem('descripcion', JSON.stringify(descripcionProductos));
  //  localStorage.setItem('imagen', JSON.stringify(imagenProductos));
    
}



//mostra los productos que se han registrado en registroProduto.html
     


// consumo de la api
const api = 'https://api.escuelajs.co/api/v1/products'
fetch(api)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const tabla = document.getElementById('')
        data.forEach(producto => {
            const tr = document.createElement('tr')
            const td1 = document.createElement('td')
            const td2 = document.createElement('td')
            const td3 = document.createElement('td')
            const td4 = document.createElement('td')
            td1.innerText = producto.title
            td2.innerText = producto.price
            td3.innerText = producto.description
            td4.innerText = producto.images
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            tr.appendChild(td4)
            tabla.appendChild(tr)
        })
    })