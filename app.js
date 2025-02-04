// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    // Obtener el elemento del campo de entrada por su ID (ajusta el ID según tu HTML)
    const inputNombre = document.getElementById('amigo');
    const nuevoNombre = inputNombre.value.trim(); // Eliminamos espacios en blanco al inicio y final

    // Validación: verificar si el campo está vacío
    if (nuevoNombre === '') {
        alert('Por favor, inserte un nombre.');
        return; // Salir de la función si el campo está vacío
    }

    // Agregar el nombre al array de amigos
    amigos.push(nuevoNombre);

    // Mostrar los nombres actualizados (opcional, puedes personalizarlo)
    console.log(amigos);

    // Limpiar el campo de entrada
    inputNombre.value = '';
}
// ... (código anterior)

// Mostrar los nombres en una lista
function mostrarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de volver a poblarla
  
    amigos.forEach(amigo => {
      const li = document.createElement('li');
      li.textContent = amigo;
      listaAmigos.appendChild(li);
    });
  }
  function sortearAmigo() {
    // 1. Validar que haya amigos disponibles
    if (amigos.length === 0) {
      alert("No hay amigos en la lista para el sorteo.");
      return;
    }
  
    // 2. Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
    // 3. Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
  
    // 4. Mostrar el resultado
    const elementoResultado = document.getElementById("resultado"); // Ajusta el ID según tu HTML
    elementoResultado.innerHTML = `¡El amigo sorteado es: ${amigoSorteado}!`;
  }
