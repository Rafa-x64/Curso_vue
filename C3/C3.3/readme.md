# Nivel 3.3: Binding Dinámico - Uniendo Vue con Bootstrap (`:class` y `:style`)

## Conceptos Clave

El binding dinámico nos permite vincular atributos de `HTML` (como `class` o `style`) directamente a variables de nuestro `data()`.

**:class (Objeto)**: Es la forma más potente. Le pasas un objeto donde la llave es la clase de `Bootstrap` y el valor es una condición booleana (`true`/`false`). Si es `true`, la clase se pone; si es `false`, `Vue` la quita automáticamente.

**:class (Array)**: Útil cuando quieres aplicar varias clases fijas y algunas dinámicas al mismo tiempo.

**:style**: Permite inyectar estilos `CSS` directamente. A diferencia del `CSS` normal, en `Vue` usamos _camelCase_

> ej. `backgroundColor` en lugar de `background-color`.

## Reactividad Estética:

Ya no "_programas el diseño_", sino que "defines estados". Si el estado de un objeto cambia a agotado: `true`, la interfaz simplemente reacciona.

## Buenas Prácticas

- **Bootstrap como Prioridad**: Siempre intenta resolver el diseño con `:class` usando clases de Bootstrap (`text-danger`, `bg-success`). Reserva :style solo para valores ultra dinámicos que Bootstrap no cubra, como el porcentaje de una barra de carga o una posición exacta en píxeles.

- **Legibilidad**: Si tu lógica dentro del `HTML` se vuelve muy larga, delega esa decisión a un método. El `HTML` debe ser fácil de leer para cualquier otro arquitecto.

## Ejemplos de Código

**Enseñanza Comparativa**: Cambiar color de fondo al fallar
Vanilla JavaScript (Enfoque Imperativo):

```javascript
const caja = document.querySelector("#alerta");
if (hayError) {
  caja.classList.add("bg-danger");
  caja.classList.remove("bg-success");
}
```

Vue.js (Enfoque Declarativo):

```vue
<div class="p-3" :class="{ 'bg-danger': hayError, 'bg-success': !hayError }">
  Estado del Sistema
</div>
```

## Planificación Proactiva

**Nota de Arquitectura**: Al utilizar binding de clases basado en el estado, desacoplamos la presentación de la lógica. Esto permite que el equipo de diseño cambie las clases de Bootstrap en el `HTML` sin riesgo de romper las funciones lógicas del script.

## Mini-Proyecto: Monitor de Servidores Pro

**Objetivo**: Crear una lista de servidores. Cada servidor tendrá un nombre y un estado (`online` o `offline`).
**Requerimientos**:

- Usa `v-for` para listar los servidores en `cards`.
- Si el servidor está `offline`, la tarjeta debe tener la clase `border-danger` y el texto del nombre debe ser `text-muted`.
- Si el servidor está online, debe tener un `badge` de Bootstrap con la clase `bg-success`.
- Crea un botón que "apague/encienda" todos los servidores a la vez cambiando una sola variable.

**Estrategia**:

- Centraliza el estilo en la propiedad `online` de cada servidor. La interfaz será un simple reflejo de tu `array` de objetos.

## Trivia

1. **En la sintaxis `:class="{ 'text-primary': esActivo }"`, ¿qué parte representa la clase de `Bootstrap` y qué parte la condición de `Vue`?**

2. **Si quiero cambiar el color de una barra de progreso basado en una variable numérica exacta (ej. 45%), ¿debería usar `:class` o `:style`?**

3. **¿Qué sucede en el `HTML` real cuando una condición en `:class` pasa de `true` a `false?`**
