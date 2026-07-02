# Nivel 1.4: Captura de Eventos y Formularios Bidireccionales (`v-on`, `v-model`)

¡Bienvenido al Nivel 1.4! Hasta ahora nuestra web muestra datos y reacciona de forma pasiva. Llegó el momento de interactuar con el usuario. Hoy aprenderás a escuchar clicks, envíos de formularios y capturar lo que el usuario escribe en tiempo real sin necesidad de hacer selecciones manuales del DOM.

## Conceptos Clave

- **Manejo de Eventos (`v-on:` o `@`):** Reemplaza por completo el viejo `addEventListener`. Para escuchar eventos como clicks, pulsaciones de teclas o envíos de formularios, usamos la directiva `@` seguida del nombre del evento (ejemplo: `@click`, `@submit`). Los métodos encargados de responder a estos eventos se guardan dentro de la opción `methods` de Vue.
- **Enlace Bidireccional (`v-model`):** Esta es una de las características más potentes de Vue. Sincroniza de forma inmediata un control de formulario (como un `<input>`) con una variable de nuestro `data()`. Si el usuario escribe en el input, la variable cambia sola; si cambias la variable desde el código, el texto del input se actualiza al instante. Los datos fluyen en ambas direcciones.
- **Modificadores de Eventos:** Vue nos permite interceptar el comportamiento nativo de los eventos directamente en el HTML. El más usado es `.prevent`, que equivale a escribir `event.preventDefault()` para evitar que la página web se recargue al enviar un formulario.

## Buenas Prácticas

1. **Mantén los métodos limpios de manipulación visual:** Los métodos en Vue solo deben encargarse de modificar los valores de las variables de estado. Deja que Vue se encargue de actualizar la interfaz visual automáticamente.
2. **Aprovecha los modificadores nativos:** Prefiere usar declaraciones limpias en el HTML como `@keyup.enter` en lugar de capturar el evento del teclado dentro del código JavaScript para evaluar manualmente si la tecla presionada fue el "Enter".

## Ejemplos de Código (Enseñanza Comparativa)

### Caso: Sincronizar el texto de un input y limpiar su valor al hacer click

#### Vanilla JavaScript (Enfoque Manual)

```html
<input type="text" id="caja-texto" />
<button id="boton-limpiar">Limpiar</button>

<script>
  const input = document.getElementById("caja-texto");
  const boton = document.getElementById("boton-limpiar");

  boton.addEventListener("click", () => {
    input.value = "";
  });
</script>
```

#### Vue.js (Enfoque Reactivo)

```html
<div id="app">
  <input type="text" v-model="nota" />
  <button @click="limpiarNota">Limpiar</button>
</div>

<script src="[https://unpkg.com/vue@3/dist/vue.global.js](https://unpkg.com/vue@3/dist/vue.global.js)"></script>
<script>
  Vue.createApp({
    data() {
      return {
        nota: "",
      };
    },
    methods: {
      limpiarNota() {
        this.nota = "";
      },
    },
  }).mount("#app");
</script>
```

## Planificación Proactiva

> **Nota de Arquitectura:** Al utilizar `v-model` y delegar los eventos a Vue, desvinculamos por completo la lógica del negocio de la estructura del HTML, permitiendo reutilizar funciones sin depender de identificadores ID o clases CSS.

## Mini-Proyecto: Lista de Invitados VIP

Crearemos un sistema dinámico que permita escribir el nombre de un invitado en un formulario, agregarlo a una lista en pantalla al presionar un botón o la tecla Enter, y que limpie el campo automáticamente bloqueando registros vacíos.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Acceso VIP</title>
  </head>
  <body>
    <div id="app">
      <h3>Registro de Invitados VIP</h3>

      <form @submit.prevent="registrarInvitado">
        <input
          type="text"
          v-model="nuevoNombre"
          placeholder="Nombre del invitado"
        />
        <button type="submit">Agregar Lista</button>
      </form>

      <h4>Invitados Confirmados:</h4>
      <ul>
        <li v-for="persona in listaInvitados" :key="persona">{{ persona }}</li>
      </ul>
    </div>

    <script src="[https://unpkg.com/vue@3/dist/vue.global.js](https://unpkg.com/vue@3/dist/vue.global.js)"></script>
    <script>
      Vue.createApp({
        data() {
          return {
            nuevoNombre: "",
            listaInvitados: ["Alejandro", "Beatriz"],
          };
        },
        methods: {
          registrarInvitado() {
            if (this.nuevoNombre.trim() !== "") {
              this.listaInvitados.push(this.nuevoNombre);
              this.nuevoNombre = "";
            }
          },
        },
      }).mount("#app");
    </script>
  </body>
</html>
```

## Trivia

1. **¿Qué hace exactamente el modificador `@submit.prevent` en un formulario de Vue?**
   - Cancela el comportamiento de recarga predeterminado del navegador al enviar el formulario.
2. **¿Cuál es la diferencia operativa entre enlazar un dato con `{{ }}` y hacerlo con `v-model`?**
   - `{{ }}` es de una sola dirección (solo lee datos), mientras que `v-model` es bidireccional (lee y escribe cambios desde y hacia el formulario).
3. **Para acceder a una variable definida en `data()` desde una función dentro de `methods`, ¿qué palabra clave es obligatoria usar?**
   - La palabra clave `this` (por ejemplo: `this.nuevoNombre`).
