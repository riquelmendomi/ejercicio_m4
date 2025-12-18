// Objeto que representa a un usuario
const usuario = {
  nombre: 'Ana',
  edad: 24,
  ciudad: 'Barcelona'
};

// Arrow function con desestructuración y template literals
const crearMensajePresentacion = ({ nombre, edad, ciudad }) => {
  return `Hola, mi nombre es ${nombre}, tengo ${edad} años y vivo en la ciudad de ${ciudad}.`;
};

// Se llama a la función y se muestra el resultado en consola
const mensajeDeBienvenida = crearMensajePresentacion(usuario);
console.log(mensajeDeBienvenida);