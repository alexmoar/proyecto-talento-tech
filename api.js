// consumo de la api
const api = 'https://api.escuelajs.co/api/v1/products';
        
        fetch(api)
            .then(res => res.json())
            .then(data => {
                const container = document.getElementById('cardContainer');
                
                data.forEach(producto => {
                    // Crear elementos de la tarjeta
                    const card = document.createElement('div');
                    card.className = 'card';

                    const image = document.createElement('img');
                    image.src = producto.images[0]; // Tomar primera imagen
                    image.alt = producto.title;
                    image.className = 'card-image';

                    const content = document.createElement('div');
                    content.className = 'card-content';

                    const title = document.createElement('h3');
                    title.className = 'card-title';
                    title.textContent = producto.title;

                    const price = document.createElement('p');
                    price.className = 'card-price';
                    price.textContent = `$${producto.price}`;

                    const description = document.createElement('p');
                    description.className = 'card-description';
                    description.textContent = producto.description;

                    // Construir la tarjeta
                    content.appendChild(title);
                    content.appendChild(price);
                    content.appendChild(description);
                    card.appendChild(image);
                    card.appendChild(content);
                    container.appendChild(card);
                });
            })
            .catch(error => {
                console.error('Error:', error);
                container.innerHTML = '<p>Error al cargar los productos</p>';
            });