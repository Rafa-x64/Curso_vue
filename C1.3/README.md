# Nivel 1.3: Directivas Condicionales y de Listas (`v-if`, `v-for`)

¡Qué tal! Ya sabemos cómo arrancar Vue y pintar datos dinámicos usando los "bigotes" (`{{ }}`). Hoy vamos a darle inteligencia a nuestra interfaz. Aprenderemos a ocultar o mostrar elementos según las condiciones del negocio y a multiplicar etiquetas HTML de forma automática usando listas de datos. En el mundo de Vue, a estas herramientas las llamamos **Directivas**.

## Conceptos Clave

- **¿Qué es una Directiva?:** Son atributos especiales de HTML que empiezan con el prefijo `v-`. Piensas en ellos como superpoderes que le dicen al HTML cómo comportarse de manera dinámica.
- **`v-if` y `v-else`:** Funcionan exactamente como un `if/else` en programación tradicional. Si la condición dentro de `v-if` es verdadera, el elemento se dibuja en el navegador. Si es falsa, Vue **elimina por completo** el elemento del DOM, haciendo que deje de existir en el árbol de la página web. `v-else` debe ir inmediatamente debajo de un `v-if` para mostrar una alternativa.
- **`v-for`:** Es nuestro bucle `for` para el HTML. Nos permite iterar sobre un array de datos y repetir la etiqueta HTML por cada elemento que exista en la lista.
- **El Atributo `:key`:** Cuando usas `v-for`, Vue te obliga a colocar un atributo `:key` (enlace de clave única). Esto sirve para que Vue recuerde la identidad exacta de cada elemento en el HTML. Si la lista cambia, Vue solo actualiza el elemento modificado en lugar de redibujar toda la pantalla.

## Buenas Prácticas

1. **Jamás mezcles `v-if` y `v-for` en el mismo elemento:** Si necesitas filtrar una lista, no pongas el `v-if` dentro de la misma etiqueta que tiene el `v-for`. Vue prioriza una directiva sobre la otra y esto genera un impacto de rendimiento terrible o comportamientos extraños.
2. **Usa identificadores únicos para el `:key`:** Utiliza siempre un ID único de tu base de datos o un valor irrepetible. Evita usar el índice de la lista (`index`) si tus datos se van a ordenar o eliminar, ya que romperá el rastreo interno de Vue.

## Ejemplos de Código (Enseñanza Comparativa)

### Caso: Renderizar una lista de elementos dinámicamente

#### Vanilla JavaScript (Enfoque Manual)

```html
<ul id="contenedor-frutas"></ul>

<script>
  const contenedor = document.getElementById("contenedor-frutas");
  const frutas = ["Manzana", "Plátano", "Kiwi"];

  contenedor.innerHTML = frutas.map((fruta) => `<li>${fruta}</li>`).join("");
</script>
```

#### Vue.js (Enfoque Declarativo Automático)

```html
<div id="app">
  <ul>
    <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
  </ul>
</div>

<script src="[https://unpkg.com/vue@3/dist/vue.global.js](https://unpkg.com/vue@3/dist/vue.global.js)"></script>
<script>
  Vue.createApp({
    data() {
      return {
        frutas: ["Manzana", "Plátano", "Kiwi"],
      };
    },
  }).mount("#app");
</script>
```

## Planificación Proactiva

> **Nota de Arquitectura:** Separar los datos crudos de las plantillas HTML permite que la interfaz sea escalable; si el array de frutas pasa de tener 3 elementos a 3000 desde una API, el HTML de Vue no cambia ni una sola línea.

## Mini-Proyecto: Monitor de Stock de Tienda

Crearemos una aplicación que evalúe si hay stock disponible. Si hay productos, los listará limpiamente; si el catálogo queda vacío, mostrará de forma automática un aviso de advertencia.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Monitor de Inventario</title>
  </head>
  <body>
    <div id="app">
      <h2>Catálogo de Almacén</h2>

      <ul v-if="productos.length > 0">
        <li v-for="producto in productos" :key="producto.id">
          {{ producto.nombre }} - Unidades: {{ producto.cantidad }}
        </li>
      </ul>

      <p v-else>⚠️ Alerta crítica: No quedan productos en el inventario.</p>
    </div>

    <script src="[https://unpkg.com/vue@3/dist/vue.global.js](https://unpkg.com/vue@3/dist/vue.global.js)"></script>
    <script>
      Vue.createApp({
        data() {
          return {
            productos: [
              { id: 101, nombre: "Laptops Pro", cantidad: 5 },
              { id: 102, nombre: "Monitores 4K", cantidad: 12 },
              { id: 103, nombre: "Teclados Mecánicos", cantidad: 8 },
            ],
          };
        },
      }).mount("#app");
    </script>
  </body>
</html>
```

## Trivia

1. **¿Qué diferencia real hay entre cómo maneja Vue el renderizado cuando una condición de `v-if` pasa a ser falsa?**
   - El elemento se elimina físicamente por completo del árbol del DOM del navegador, no solo se oculta visualmente.
2. **¿Por qué es obligatorio y crucial colocar el atributo `:key` al usar un bucle `v-for`?**
   - Para darle una identidad única a cada elemento, optimizando el rendimiento del DOM al actualizar solo lo que cambió.
3. **¿Qué sucede si pones un `v-if` y un `v-for` exactamente en la misma etiqueta HTML?**
   - Es una mala práctica que genera problemas de rendimiento y lógica confusa debido al orden de prioridad interno de las directivas en Vue.
