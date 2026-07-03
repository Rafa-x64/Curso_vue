# Clase 1.4: Introducción a Vue.js y la Magia de la Reactividad

¡Bienvenidos al siguiente nivel! Hasta ahora modificamos el DOM "a mano". Vue.js cambia las reglas: nosotros solo gestionamos los datos, y Vue actualiza el HTML automáticamente.

## Conceptos Clave

* **CDN:** Forma rápida de importar Vue.js mediante una simple etiqueta `<script>` en el HTML.
* **`Vue.createApp()`:** Inicia una nueva aplicación reactiva y define su comportamiento.
* **`data()`:** Función que retorna un objeto con el estado (variables) que la interfaz necesita observar.
* **Interpolación (`{{ }}`):** Sintaxis en el HTML (bigotes) para imprimir dinámicamente el valor de una variable de Vue.
* **`.mount('#app')`:** Indica a Vue en qué contenedor exacto del HTML tiene control absoluto para actuar.

## Enseñanza Comparativa: Vanilla JS vs Vue.js

**Vanilla JS (Imperativo):** Buscas el elemento y le ordenas explícitamente cambiar.
```javascript
const mensajeNodo = document.querySelector('#mensaje');
mensajeNodo.textContent = 'Hola Mundo';
```

**Vue.js (Declarativo):** Defines la variable en el HTML y Vue sincroniza los cambios automáticamente.
```html
<p>{{ mensaje }}</p>
```
```javascript
data() {
  return { mensaje: 'Hola Mundo' }
}
```

## Buenas Prácticas

* **Contenedor Aislado:** Nunca montes Vue en la etiqueta `<body>`. Usa un contenedor dedicado y envolvente, por convención `<div id="app">`.
* **Estado Limpio:** La función `data()` solo debe retornar las variables que impactan directamente a la interfaz.

## Ejemplos de Código

```html
<div id="app">
  <h1>{{ tituloPrincipal }}</h1>
</div>

<script src="[https://unpkg.com/vue@3/dist/vue.global.js](https://unpkg.com/vue@3/dist/vue.global.js)"></script>
<script>
  Vue.createApp({
    data() {
      return {
        tituloPrincipal: 'Panel Reactivo'
      };
    }
  }).mount('#app');
</script>
```

## Planificación Proactiva

> Delegar la manipulación del DOM a Vue.js mediante un enfoque declarativo elimina selectores manuales, permitiendo escalar limpiamente hacia componentes reutilizables.

## Mini-Proyecto: Tarjeta de Presentación Reactiva

Interfaz mínima que muestra un mensaje de bienvenida y el nombre del usuario conectando el HTML a variables controladas por Vue.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Tarjeta Vue</title>
  <script src="[https://unpkg.com/vue@3/dist/vue.global.js](https://unpkg.com/vue@3/dist/vue.global.js)"></script>
</head>
<body>

  <main id="app">
    <p>Estado del sistema: {{ mensaje }}</p>
    <p>Operador actual: {{ nombre }}</p>
  </main>

  <script>
    Vue.createApp({
      data() {
        return {
          mensaje: 'Bienvenido al servidor',
          nombre: 'Rafael Alvarez'
        };
      }
    }).mount('#app');
  </script>
  
</body>
</html>
```

## Trivia

1. **¿Qué hace la sintaxis `{{ }}` en el HTML?**
   * *Respuesta:* Interpola e imprime dinámicamente el valor de las variables definidas en la función `data()`.
2. **¿Por qué la propiedad `data` debe ser una función que retorna un objeto?**
   * *Respuesta:* Para asegurar que cada instancia de la aplicación mantenga una copia independiente y fresca de sus datos.
3. **¿Cuál es el rol de `.mount('#app')`?**
   * *Respuesta:* Conecta y delega toda la lógica reactiva de Vue a un elemento físico específico del HTML.