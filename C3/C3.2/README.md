# Nivel 3.2: Componentes de Interfaz - UI Lista para la Batalla

¡Qué tal, colega arquitecto! En la clase anterior aprendimos a construir los cimientos y las vigas de nuestra App con el Grid. Ahora vamos a vestirla. Bootstrap 5 no es solo una rejilla; es un catálogo inmenso de componentes probados en combate que nos permiten crear interfaces profesionales en minutos, no en horas.

### 1. Conceptos Clave

Los componentes son bloques de construcción pre-diseñados. En lugar de escribir 50 líneas de CSS para un botón con sombra y bordes redondeados, usamos clases que ya contienen esa "inteligencia" visual.

- **Botones (`btn`):** Son mucho más que colores. Bootstrap maneja estados (hover, active, disabled) y variantes como `btn-outline-primary` (solo borde) o tamaños con `btn-lg` y `btn-sm`.
- **Tarjetas (`card`):** Es el componente rey. Una `card` es un contenedor flexible que incluye `card-header`, `card-body` y `card-footer`. Son ideales para mostrar objetos de una lista (productos, usuarios, tareas).
- **Alertas y Badges:** Las `alert` sirven para feedback del sistema (éxito, error), y los `badge` son pequeñas etiquetas circulares para contadores o categorías.
- **Sistema de Utilidades (Espaciado):** Bootstrap usa una fórmula matemática para el espaciado: `{propiedad}{lado}-{tamaño}`.
  - `mt-3`: Margin Top (margen arriba) nivel 3.
  - `pb-5`: Padding Bottom (relleno abajo) nivel 5.
  - `mx-auto`: Margin X (izq/der) automático (centra elementos).

#### Enseñanza Comparativa: UI Manual vs. Componentes Bootstrap

```html
<!-- Vanilla CSS: Requería crear reglas manuales en un .css -->
<!-- .mi-boton { padding: 10px; border: none; border-radius: 5px; background: blue; color: white; } -->
<button
  style="padding: 10px; border-radius: 5px; background: blue; color: white; border: none;"
>
  Boton Manual
</button>

<!-- Bootstrap 5: Estilo profesional con solo clases -->
<button class="btn btn-primary shadow">Boton Pro</button>
```

- **Vanilla CSS:** Para una tarjeta profesional necesitabas definir `box-shadow`, `border-radius`, `overflow: hidden`, `padding` y pelearte con las fuentes. Si querías cambiar el color de toda la App, tenías que editar 10 selectores.
- **Bootstrap 5 (Enfoque Pro):** Usas la clase `card` y `shadow`. Si quieres que sea roja, cambias `bg-light` por `bg-danger`. El diseño es consistente porque todos los componentes siguen la misma línea estética y tipográfica por defecto.

---

### 2. Profundizando en la Anatomía de Componentes

Cuando usas una `card`, no estás solo poniendo un recuadro. Estás creando una jerarquía. El `card-body` separa el contenido del borde automáticamente con un padding elegante. Si añades un `card-img-top`, Bootstrap se encarga de que la imagen encaje perfectamente con las esquinas redondeadas superiores de la tarjeta.

**Feedback Visual:** Los componentes de Bootstrap están diseñados para reaccionar. Un botón con la clase `btn` cambia ligeramente de tono al pasar el mouse, algo que en CSS puro te obligaría a escribir pseudo-clases `:hover` para cada color.

```html
<div class="card shadow-sm" style="width: 18rem;">
  <img src="https://via.placeholder.com/150" class="card-img-top" alt="Hero" />
  <div class="card-body">
    <h5 class="card-title fw-bold">
      Arquitecto Frontend <span class="badge bg-success">Pro</span>
    </h5>
    <p class="card-text text-muted">Maquetación con componentes de élite.</p>
    <button class="btn btn-outline-primary w-100">Ver Perfil</button>
  </div>
</div>
```

---

### 3. Buenas Prácticas

- **No reinventes la rueda:** Si Bootstrap tiene un componente (como un `dropdown` o una `modal`), úsalo. No intentes crear tu propio CSS para algo que el framework ya resolvió y optimizó para dispositivos móviles.
- **Semántica de Colores:** Usa los colores según su significado psicológico: `primary` (acción principal), `success` (éxito), `danger` (error/borrar), `warning` (atención). No uses un botón verde para borrar solo porque "te gusta el verde".
- **Limpieza de Clases:** Si un elemento tiene más de 5 o 6 clases de utilidad, considera si ese bloque debería ser un componente de Vue propio para no ensuciar tu HTML.

---

### 4. Planificación Proactiva

**Nota Estratégica:** Al estandarizar nuestra UI con componentes de Bootstrap, permitimos que nuestra App sea "tematizable". En el futuro, cambiar el look global (ej. de modo claro a oscuro) será tan simple como cambiar una variable de CSS o un archivo de Bootstrap, sin tocar el código de nuestros componentes de Vue.

---

### Mini-Proyecto: Catálogo de Héroes

**Objetivo:** Diseñar una interfaz de "Galería de Personajes" usando la jerarquía correcta de componentes y utilidades.

**Requerimientos:**

1.  Un encabezado (`header`) con un `badge` que muestre el número total de personajes.
2.  Una rejilla (Grid) de tarjetas. Cada tarjeta debe tener:
    - Una imagen superior.
    - Un título en negrita (`fw-bold`).
    - Un texto descriptivo.
    - Un botón de "Ver más" que cambie de color según el tipo de héroe.
3.  Usa utilidades de espaciado para que las tarjetas no estén pegadas entre sí ni al borde de la pantalla.
4.  Añade una `alert` al final de la página que sirva como aviso legal o pie de página.

---

### 6. Trivia

1.  Si quiero añadir un margen interno (padding) solo en la parte inferior de un elemento, ¿qué clase de utilidad debo usar?
2.  ¿Cuál es la diferencia visual entre `btn-primary` y `btn-outline-primary`?
3.  Dentro de una `card`, ¿en qué sección (header, body o footer) se suele colocar el texto principal y por qué?
