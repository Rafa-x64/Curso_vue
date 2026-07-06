# Clase 1.3: JavaScript Moderno y Modificación Directa del DOM

¡Qué tal! Ahora que entendemos la estructura y presentación, es hora de darle vida a nuestra web. Dejamos atrás las prácticas antiguas y nos enfocamos en JavaScript moderno para leer y modificar nuestra interfaz en tiempo real.

## Conceptos Clave

- **Variables Modernas (`let` y `const`):** Usamos `let` para valores mutables (como un contador) y `const` para valores fijos o referencias a la interfaz.
- **Template Literals (` `` `):** Permiten inyectar variables directamente en una cadena de texto usando `${variable}`, evitando concatenaciones complejas.
- **Selección del DOM:** Usamos `document.querySelector('#id')` para capturar elementos de forma limpia.
- **`textContent`:** La propiedad más segura para leer o sobrescribir el texto plano de una etiqueta HTML.
- **`console.log()`:** Herramienta clave para imprimir valores en la consola del navegador y verificar datos internamente.

## Buenas Prácticas

- **Prioriza `const`:** Declara todo como `const` por defecto. Cambia a `let` solo si el valor va a mutar. Esto previene comportamientos inesperados.
- **Nombres descriptivos:** Nombres como `userScore` o `titleNode` se explican solos.

## Ejemplos de Código

```html
<h1 id="titulo">Título por defecto</h1>
```

```javascript
const tituloApp = document.querySelector("#titulo");
const userName = "Ana";
let userScore = 10;

tituloApp.textContent = `Panel de Control: ${userName} - Puntos: ${userScore}`;
console.log(tituloApp.textContent);
```

## Planificación Proactiva

> Aislar la captura de elementos del DOM en constantes al inicio del archivo evita búsquedas redundantes en memoria, preparando el terreno para la arquitectura de estado aislado.

## Mini-Proyecto: Actualizador de Perfil

Este ejercicio modifica un párrafo en el HTML para mostrar un nombre y un contador, integrando exclusivamente lo aprendido.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Perfil</title>
  </head>
  <body>
    <h1 id="titulo">Sistema</h1>
    <p id="mensaje"></p>

    <script>
      const nombreEstudiante = "Rafael";
      let visitas = 0;

      const nodoMensaje = document.querySelector("#mensaje");
      nodoMensaje.textContent = `Bienvenido ${nombreEstudiante}, número de visitas: ${visitas}`;

      console.log(nodoMensaje.textContent);
    </script>
  </body>
</html>
```

## Trivia

1. **¿Qué diferencia fundamental existe entre `let` y `const`?**
   - _Respuesta:_ `let` permite reasignar el valor en el futuro, mientras que `const` crea una referencia de solo lectura que no puede ser reasignada.
2. **¿Cuál es la función principal de `console.log()`?**
   - _Respuesta:_ Imprimir variables o mensajes en la consola del navegador para depurar el código detrás de escena.
3. **¿Por qué usamos Template Literals (backticks) en lugar de comillas normales?**
   - _Respuesta:_ Porque permiten la interpolación directa de variables usando `${}` dentro del texto, mejorando la legibilidad.
