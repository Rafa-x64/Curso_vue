# Clase 1: Nivel 1 - Fundamentos Esenciales y Manipulación del DOM

¡Bienvenidos al inicio del desarrollo web Fullstack! En esta sesión sentamos las bases teóricas de las tecnologías esenciales, refrescamos la semántica de HTML5 junto con la presentación de CSS3, y exploramos cómo JavaScript nativo interactúa directamente con los elementos de la interfaz. Finalmente, introducimos la mentalidad reactiva de Vue.js.

---

## 2. Conceptos Clave

### El Ecosistema Web Esencial
* **HTML5:** Define la estructura y el significado semántico del contenido en la web.
* **CSS3:** Controla el diseño visual, estilos, colores y la disposición espacial de la estructura.
* **JavaScript:** Aporta comportamiento dinámico, interactividad y control lógico en tiempo real.
* **Vue.js:** Framework progresivo que elimina la manipulación manual del DOM sincronizando el estado lógico con la vista automáticamente.

### Manipulación del DOM (Document Object Model)
El navegador transforma el HTML en un árbol de objetos interactivos. Con JavaScript nativo accedemos y modificamos este árbol usando:
* `document.querySelector()`: Método moderno para seleccionar cualquier elemento usando selectores de CSS.
* `textContent`: Propiedad para leer o modificar de forma segura el texto plano de un nodo.

### Enfoque Comparativo: Vanilla JS vs. Vue.js
* **Vanilla JS (Imperativo):** Debes buscar manualmente el elemento en el DOM y ordenarle explícitamente qué propiedad cambiar.
* **Vue.js (Declarativo):** Vinculas una variable del script al HTML. Al actualizar el valor de la variable, la interfaz se refresca sola sin necesidad de buscar selectores.

---

## 3. Buenas Prácticas

* **Semántica pura:** Evita el abuso de contenedores genéricos (`<div>`). Emplea las etiquetas nativas correctas (`<main>`, `<section>`, `<button>`) para garantizar accesibilidad y un árbol DOM limpio.
* **Caché de Selectores:** Almacena los elementos capturados en constantes (`const`) si vas a interactuar con ellos repetidamente. Así previenes búsquedas redundantes en el DOM que consumen CPU.

---

## 4. Ejemplos de Código

### Estructura y Estilos Base
```html
<main class="card">
  <h1 id="title">Texto Inicial</h1>
  <button id="action-btn">Cambiar Texto</button>
</main>
```

```css
/* style.css */
.card {
  font-family: sans-serif;
  text-align: center;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
```

### Manipulación del DOM con Vanilla JS
```javascript
// app.js
const titleElement = document.querySelector('#title');
const buttonElement = document.querySelector('#action-btn');

buttonElement.addEventListener('click', () => {
  titleElement.textContent = 'Texto Modificado';
});
```

---

## 5. Mini-Proyecto: Interfaz de Control de Estado

Este ejercicio práctico aplica HTML5 semántico, diseño modular con CSS3 y la captura de eventos para modificar propiedades de texto mediante JavaScript.

### Nota Estratégica de Arquitectura
> Separar la lógica de actualización en constantes aisladas minimiza el acoplamiento con la estructura del HTML, facilitando una futura transición hacia componentes reactivos en Vue.js.

### Código Fuente Completo
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Control de Estado</title>
  <style>
    body {
      font-family: system-ui, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background: #f3f4f6;
    }
    .panel {
      background: #ffffff;
      padding: 30px;
      border-radius: 8px;
      text-align: center;
      box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    }
    .status {
      font-size: 1.25rem;
      margin-bottom: 20px;
      color: #dc2626;
    }
    button {
      background: #2563eb;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <main class="panel">
    <p id="status-text" class="status">Estado: Inactivo</p>
    <button id="toggle-btn">Activar Sistema</button>
  </main>

  <script>
    const statusText = document.querySelector('#status-text');
    const toggleBtn = document.querySelector('#toggle-btn');

    toggleBtn.addEventListener('click', () => {
      statusText.textContent = 'Estado: Activo';
      statusText.style.color = '#16a34a';
      toggleBtn.textContent = 'Sistema Listo';
      toggleBtn.disabled = true;
    });
  </script>
</body>
</html>
```

---

## 6. Trivia

1. **¿Qué diferencia fundamental hay entre modificar un elemento con `textContent` frente a `innerHTML`?**
   * *Respuesta:* `textContent` interpreta el valor estrictamente como texto plano, mientras que `innerHTML` procesa las cadenas como etiquetas HTML, lo que puede abrir brechas de seguridad (XSS) si el contenido proviene del usuario.
2. **¿Por qué la manipulación declarativa de Vue.js es superior a la imperativa de Vanilla JS en aplicaciones grandes?**
   * *Respuesta:* Porque elimina la necesidad de escribir y mantener selectores manuales en el script. Te enfocas en gestionar los datos y dejas que la herramienta sincronice la interfaz automáticamente.
3. **¿Cuál es el beneficio de almacenar un elemento seleccionado en una constante `const`?**
   * *Respuesta:* Evita que el navegador tenga que volver a recorrer recursivamente todo el árbol de nodos del DOM cada vez que se ejecuta el evento, reduciendo el consumo de memoria y ciclos de procesamiento.