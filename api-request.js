$(document).ready(function() {
    // Función para hacer la petición GET a la API
    function loadPosts() {
        // Mostrar el indicador de carga
        $('#loading').show();

        // Realizar la petición AJAX
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts', // API pública de ejemplo
            method: 'GET',
            success: function(data) {
                // Ocultar el indicador de carga
                $('#loading').hide();

                // Limpiar el contenedor de posts
                $('#posts-container').empty();

                // Mostrar los datos en una lista
                data.forEach(function(post) {
                    $('#posts-container').append(`
                        <div class="post">
                            <h2>${post.title}</h2>
                            <p>${post.body}</p>
                        </div>
                    `);
                });
            },
            error: function(error) {
                // Ocultar el indicador de carga
                $('#loading').hide();

                // Mostrar un mensaje de error
                $('#posts-container').html('<p>Error al cargar los posts. Inténtalo de nuevo más tarde.</p>');
                console.error('Error en la petición AJAX:', error);
            }
        });
    }

    // Asignar la función al botón de cargar posts
    $('#load-posts').click(function() {
        loadPosts();
    });
});