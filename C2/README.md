# Nivel 2: Estructuras Dinámicas e Interactividad

¡Qué tal, futuro arquitecto! En el nivel anterior montamos nuestra primera App de Vue. Ahora vamos a darle cerebro. Aprenderás a que tu interfaz tome decisiones sola, a mostrar listas inmensas de datos con una sola línea de código y a organizar todo visualmente con la herramienta favorita de los profesionales: Flexbox.

---

## 2.1 Decisiones Inteligentes: v-if vs. Manipulación Manual

### Conceptos Clave
En JavaScript puro, si querías que algo desapareciera, tenías que buscar el elemento y cambiarle el estilo o borrarlo del HTML. En Vue, simplemente condicionamos su existencia.

* **`v-if`:** Es una directiva que evalúa una condición booleana. Si es `true`, el elemento existe; si es `false`, Vue lo elimina físicamente del árbol del DOM.
* **`v-else`:** Debe ir justo debajo de una etiqueta con `v-if`. Se muestra automáticamente si la primera condición falla, funcionando exactamente igual que en la lógica de programación tradicional.

### Buenas Prácticas
* **Estado Semántico:** Usa variables con nombres descriptivos y lógicos (ej. `estaCargando`, `hayError`, `esVisible`). Tu código debe poder leerse casi como una frase en lenguaje natural.

### Ejemplos de Código

#### Vanilla JavaScript (Enfoque Imperativo)
```javascript
const alerta = document.querySelector('#alerta');

if (hayError) {
  alerta.style.display = 'block';
} else {
  alerta.style.display = 'none';
}
```

#### Vue.js (Enfoque Declarativo)
```html
<div v-if="hayError">¡Algo salió mal!</div>
<div v-else>Todo va de maravilla</div>
```

### Planificación Proactiva
> **Nota Estratégica:** Usar `v-if` en lugar de ocultar visualmente con CSS (`display: none`) mejora drásticamente el rendimiento en aplicaciones grandes. El navegador ahorra memoria al no tener que procesar ni renderizar elementos que el usuario no está viendo.

---

## 2.2 Renderizado en Masa: v-for y el Atributo :key

### Conceptos Clave
¿Tienes 100 productos en una base de datos? No escribas 100 etiquetas HTML. Escribe solo una y dile a Vue que se encargue de multiplicarla.

* **`v-for`:** Itera sobre un array de datos (listas) y clona la etiqueta HTML por cada elemento que encuentre.
* **Atributo `:key`:** Funciona como el "DNI" o número de identidad de cada elemento generado. Le permite a Vue rastrear exactamente qué pieza de la lista cambió, se movió o se eliminó, evitando tener que redibujar toda la pantalla desde cero.

### Buenas Prácticas
* **Unicidad Estricta:** Nunca uses el índice del array (`index`) como `:key` si la lista se va a desordenar, filtrar o modificar. Usa siempre un identificador único real proveniente de tus datos (ej. `id`).

### Ejemplos de Código

#### Vanilla JavaScript (Enfoque Imperativo)
```javascript
const lista = document.querySelector('#lista');

productos.forEach(producto => {
  lista.innerHTML += `<li>${producto.nombre}</li>`;
});
```

#### Vue.js (Enfoque Declarativo)
```html
<ul>
  <li v-for="producto in productos" :key="producto.id">
    {{ producto.nombre }}
  </li>
</ul>
```

### Planificación Proactiva
> **Nota Estratégica:** Vincular un `:key` único estabiliza tu interfaz. Si el array muta en el futuro, los elementos del DOM mantendrán su estado interno, evitando comportamientos visuales erráticos en producción.

---

## 2.3 Layouts Modernos: Dominando Flexbox

### Conceptos Clave
Antes de seguir inyectando lógica, necesitamos que tu web se vea impecable. Flexbox es el estándar moderno de CSS para alinear y distribuir elementos sin pelear con márgenes invisibles.

* **`display: flex;`:** Convierte a un contenedor clásico en un contenedor "flexible". Por defecto, sus hijos ahora se alinean uno al lado del otro en una fila.
* **`justify-content`:** Alinea los elementos de forma horizontal a lo largo del contenedor (ej. al inicio, al centro, al final o distribuyendo el espacio entre ellos).
* **`align-items`:** Alinea los elementos de forma vertical (eje cruzado).

### Buenas Prácticas
* **Contenedores Fluidos:** Evita asignar anchos fijos en píxeles (`px`) a cada caja. Deja que Flexbox calcule el espacio sobrante por ti para que tu diseño sea responsivo por naturaleza.

### Ejemplos de Código

#### CSS Moderno con Flexbox
```css
.contenedor-flexible {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px; /* Crea separación limpia entre los hijos */
}
```

### Planificación Proactiva
> **Nota Estratégica:** Flexbox abstrae la complejidad matemática de las cuadrículas. Diseñar componentes basados en contenedores flexibles hace que tu UI sea altamente adaptable a pantallas móviles sin reescribir la lógica de estilos.

---

## 2.4 Métodos y Eventos: Escuchando con @click y methods

### Conceptos Clave
Llegó el momento de que la web te escuche. ¿El usuario hizo click? Vamos a responderle de inmediato.

* **`@click`:** Es la forma abreviada y moderna de `v-on:click`. Captura el evento de clic del usuario directamente en la etiqueta HTML.
* **Opción `methods`:** Es la sección dentro de la configuración de tu instancia de Vue donde agrupas y guardas de forma ordenada todas tus funciones de negocio.
* **`this`:** Palabra clave fundamental. La necesitas para poder leer o modificar cualquier variable que hayas definido en tu `data()` desde dentro de tus funciones.

### Buenas Prácticas
* **Funciones Atómicas:** Una función debe tener una única responsabilidad clara (ej. `agregarTarea`, `eliminarUsuario`). Esto hace que el código sea predecible y fácil de mantener.

### Ejemplos de Código

#### Vanilla JavaScript (Enfoque Imperativo)
```javascript
const boton = document.querySelector('#btn-saludar');

boton.addEventListener('click', function() {
  alert('¡Hola desde Vanilla JS!');
});
```

#### Vue.js (Enfoque Declarativo)
```html
<button @click="saludarUsuario">Salúdame</button>

<script>
// Dentro de tu instancia de Vue
createApp({
  methods: {
    saludarUsuario() {
      alert('¡Hola desde Vue!');
    }
  }
})
</script>
```

### Planificación Proactiva
> **Nota Estratégica:** Separar las acciones del usuario (`@click`) de la lógica central (objeto `methods`) limpia tu HTML de fragmentos de código espagueti, facilitando futuras pruebas unitarias de tus funciones.

---

## 🚀 Mini-Proyecto Integrador: Monitor de Stock de Tienda

Vamos a crear una interfaz visual que despliegue un catálogo de productos. Si el stock llega a cero, el producto mostrará un aviso de "Agotado" y el botón de compra desaparecerá de inmediato. Todo organizado con un layout limpio basado en Flexbox.

### Planificación Proactiva
> **Nota de Arquitectura:** Al centralizar la lógica de "Agotado" en una evaluación del estado numérico de los datos (`item.stock > 0`), permitimos que la interfaz reaccione instantáneamente a cambios en el inventario sin escribir ni una sola línea de manipulación manual del DOM.

### Código Fuente

```html
<div id="app" class="tienda-layout">
  <div v-for="item in productos" :key="item.id" class="tarjeta-producto">
    <h3>{{ item.nombre }}</h3>
    
    <p v-if="item.stock > 0">Disponibles: {{ item.stock }}</p>
    <p v-else class="alerta-error">¡Producto Agotado!</p>
    
    <button v-if="item.stock > 0" @click="comprarArticulo(item)">
      Comprar
    </button>
  </div>
</div>

<style>
  .tienda-layout {
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 20px;
    padding: 20px;
  }
  .tarjeta-producto {
    display: flex;
    flex-direction: column;
    border: 1px solid #cbd5e1;
    padding: 20px;
    border-radius: 8px;
    min-width: 150px;
    text-align: center;
  }
  .alerta-error {
    color: #ef4444;
    font-weight: bold;
  }
</style>

<script src="[https://unpkg.com/vue@3/dist/vue.global.js](https://unpkg.com/vue@3/dist/vue.global.js)"></script>
<script>
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        productos: [
          { id: 101, nombre: 'Teclado Mecánico', stock: 5 },
          { id: 102, nombre: 'Ratón Inalámbrico', stock: 0 },
          { id: 103, nombre: 'Monitor Curvo', stock: 2 }
        ]
      }
    },
    methods: {
      comprarArticulo(producto) {
        producto.stock--;
      }
    }
  }).mount('#app');
</script>
```

---

## 🎯 Trivia de Comprensión

1. **¿Qué sucede a nivel de memoria y DOM cuando la condición de un `v-if` resulta ser falsa?**
   * **Respuesta:** El elemento se elimina y destruye completamente del árbol del DOM del navegador, no es que simplemente se vuelva invisible con CSS.

2. **¿Para qué sirve exactamente la propiedad `:key` cuando utilizamos un bucle `v-for`?**
   * **Respuesta:** Para darle una identidad única e inmutable a cada elemento renderizado. Esto optimiza drásticamente el rendimiento de Vue al permitirle saber qué elemento específico debe mover o actualizar cuando la lista original cambia.

3. **Si necesitas modificar o leer una variable declarada en `data()` desde una función dentro de `methods`, ¿qué sintaxis es obligatoria?**
   * **Respuesta:** Se debe anteponer siempre la palabra clave `this` (por ejemplo: `this.miVariable = 10;`).