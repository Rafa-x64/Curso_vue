# Nivel 2: Estructuras Dinámicas e Interactividad

## 2.4 Métodos y Eventos: Escuchando al usuario con @click y methods

¡Qué tal, arquitecto! Ya tenemos una web que decide qué mostrar y que genera listas automáticas. Pero ahora falta lo más divertido: **que la web responda cuando el usuario interactúe**. Llegó el momento de dejar de ser espectadores y empezar a capturar clicks y acciones para ejecutar nuestra propia lógica de negocio.

### Conceptos Clave

La interactividad se basa en capturar eventos (como un click) y disparar funciones que cambien nuestros datos.

- **@click:** Es el "atajo" profesional de la directiva `v-on:click`. Se pone directamente en la etiqueta HTML para decirle: "cuando te toquen, avísame".
- **La opción methods:** Es el objeto dentro de tu instancia de Vue donde guardaremos todas nuestras "recetas" o funciones. Es el cerebro lógico de tu aplicación.
- **La palabra mágica 'this':** Dentro de una función en `methods`, usamos `this` para referirnos a nuestra propia App. Si quieres cambiar una variable de `data()`, debes escribir `this.nombreDeLaVariable`.
- **Enfoque Reactivo:** Al igual que con las directivas anteriores, nosotros no cambiamos el HTML a mano. Nosotros cambiamos el dato en el método, y Vue se encarga de que el HTML se actualice solo.

### Buenas Prácticas

- **Funciones Atómicas:** Cada método debe hacer solo una cosa (ej. `sumarStock` o `eliminarProducto`). Esto hace que tu código sea modular y fácil de arreglar si algo falla.
- **Nombres con Acción:** Nombra tus funciones empezando con un verbo claro (infinitivo) como `procesarPago`, `cambiarEstado` o `saludarUsuario`. Así tu código se explica solo.
- **HTML Limpio:** No escribas lógica compleja dentro del HTML (ej. `@click="cantidad > 0 ? cantidad-- : 0"`). Mejor crea un método en el script y llámalo desde el HTML: `@click="disminuirCantidad"`.

### Ejemplos de Código (Enseñanza Comparativa)

#### Caso: Mostrar una alerta de bienvenida al pulsar un botón

**Enfoque Tradicional (Vanilla JS - Manual y Acoplado):**

```javascript
const boton = document.querySelector("#btn-saludo");
boton.addEventListener("click", function () {
  alert("¡Hola desde JS puro!");
});
```

**Enfoque Moderno (Vue.js - Limpio y Centralizado):**

```javascript
// En el script
methods: {
  saludar() {
    alert('¡Hola desde Vue!');
  }
}
```

```html
<!--En el HTML-->
<button @click="saludar">Púlsame</button>
```

### Planificación Proactiva

**Nota de Arquitectura:** Aislar la lógica de los eventos dentro del objeto `methods` centraliza todos los puntos de entrada de la aplicación. Esto no solo previene fugas de memoria por manejadores de eventos mal destruidos, sino que prepara el terreno para realizar pruebas unitarias automatizadas en el futuro.

### Mini-Proyecto: Monitor de Stock de Tienda

**Objetivo:** Crear una interfaz que permita aumentar o disminuir el inventario de un producto. Si el stock llega a cero, el botón de compra debe desaparecer y mostrar un aviso de "Agotado".
**Instrucciones:**

- Define una variable stock en `data()` con un valor inicial (ej. 5).
- Crea dos botones: uno para "Agregar" y otro para "Quitar".
- Crea dos métodos en `methods` que aumenten o disminuyan el valor de `this.stock`.
- Asegúrate de que el stock nunca sea menor a 0.
- Usa `v-if` para que el botón de "Comprar" solo exista si `stock > 0`.
- Usa `Flexbox` para centrar tus botones y que se vean profesionales.

### Trivia

1 **¿De qué directiva estándar de Vue es @click un atajo sintáctico?**

- Respuesta: Es el atajo de `v-on:click`.
  2 **Si estoy dentro de un método y quiero cambiar una variable llamada usuario, ¿cómo debo escribirla?**
- Respuesta: Debes usar `this.usuario`.
  3 **¿Qué beneficio técnico tiene poner la lógica en un método en lugar de escribirla directamente en el HTML del botón?**
- Respuesta: El código es más legible, fácil de reutilizar en otros botones y permite realizar validaciones complejas antes de cambiar los datos.
