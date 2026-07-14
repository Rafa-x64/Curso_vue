# Nivel 3.1: Sistema de Rejilla (Grid) - Maquetación Responsiva de 12 Columnas

¡Qué tal, colega arquitecto! Bienvenido al Nivel 3. Aquí es donde dejamos de hacer sitios que "funcionan" para empezar a construir interfaces que se adaptan a cualquier pantalla como un guante. Bootstrap 5 es nuestra herramienta de artillería pesada para esto, y su corazón es el **Sistema de Rejilla (Grid System)**. Olvida las pesadillas de calcular píxeles a mano; hoy aprenderás a pensar en proporciones.

### 1. Conceptos Clave

El Grid de Bootstrap se basa en **Flexbox**, pero lo simplifica al extremo usando clases predefinidas. La idea central es que dividimos el ancho de la pantalla en **12 columnas imaginarias**.

- **El Contenedor (`container` / `container-fluid`):** Es el marco de tu obra. El `container` deja márgenes laterales para que el contenido no pegue al borde, mientras que el `fluid` ocupa el 100% del ancho siempre.
- **La Fila (`row`):** Es el riel horizontal donde viven las columnas. Su función es agruparlas y corregir los espacios (gutters) para que todo se alinee perfectamente.
- **La Columna (`col-`):** Es la unidad básica. Si quieres que algo ocupe la mitad de la pantalla, le das 6 columnas (`col-6`). Si quieres que ocupe un tercio, le das 4 (`col-4`).
- **Breakpoints (Puntos de quiebre):** Bootstrap usa etiquetas como `sm`, `md`, `lg`, `xl` para saber cuándo cambiar el diseño.
  - `col-12`: Se aplica desde el celular más pequeño.
  - `col-md-6`: Dice "a partir de tablets (pantalla mediana) hacia arriba, ocupa la mitad".

#### Enseñanza Comparativa: Maquetación Manual vs. Bootstrap Grid

- **Vanilla CSS:** Tenías que escribir `media-queries` pesadas, definir `display: flex`, calcular `width: 33.33%` y pelearte con los márgenes que rompían el diseño.
- **Bootstrap 5 (Enfoque Pro):** Solo declaras en el HTML lo que quieres. Si pones `col-12 col-lg-3`, Bootstrap ya sabe internamente que en celular va a pantalla completa y en monitores grandes se pone en fila ocupando un cuarto del espacio. Tú te enfocas en la estructura, él en la matemática.

---

### 2. Profundizando en la Lógica de 12

¿Por qué 12? Porque es el número "mágico" de la divisibilidad. Puedes dividir tu pantalla perfectamente en:

- 2 partes (6 + 6)
- 3 partes (4 + 4 + 4)
- 4 partes (3 + 3 + 3 + 3)
- 6 partes (2 + 2 + 2 + 2 + 2 + 2)

**Mobile-First (Primero el móvil):** Esta es la regla de oro de la industria moderna. En Bootstrap, si no pones un breakpoint (como `md`), la clase se aplica a todo, empezando por el móvil. Siempre diseña pensando en que el usuario está en un celular y luego ve "expandiendo" las columnas para pantallas más grandes.

---

### 3. Buenas Prácticas

- **Jerarquía Estricta:** Las columnas (`col`) DEBEN ser hijas directas de una fila (`row`), y las filas DEBEN estar dentro de un contenedor (`container`). Si rompes esta cadena, los márgenes negativos de Bootstrap harán que tu web tenga un scroll horizontal horrible.
- **No abuses de los IDs para diseño:** Usa las clases de Bootstrap para el layout. Deja los IDs solo para JS o anclas específicas.
- **Suma hasta 12:** Siempre asegúrate de que tus columnas dentro de una `row` sumen 12. Si sumas 13, la última columna saltará a la siguiente línea (útil a veces, pero debe ser intencional).

### Ejemplos de codigo (Vue)

```html
<div class="mb-3">
  <label class="form-label">Tu Nombre</label>
  <input
    v-model="nombre"
    :class="nombre.length < 3 ? 'is-invalid' : 'is-valid'"
    type="text"
    class="form-control"
  />
  <div class="invalid-feedback">Mínimo 3 letras, arquitecto.</div>
</div>
```

---

### 4. Planificación Proactiva

**Nota Estratégica:** Al utilizar el sistema de rejilla estandarizado de Bootstrap en lugar de layouts personalizados, garantizamos que cualquier componente nuevo que creemos en el futuro (Nivel 5) encaje perfectamente en cualquier parte de la App sin necesidad de reescribir CSS. La consistencia visual es el pilar de una arquitectura escalable.

---

### 5. Mini-Proyecto: Estructura de Dashboard Profesional

**Objetivo:** Diseñar el esqueleto de un panel de administración que sea totalmente responsivo usando solo las clases del Grid.

**Requerimientos:**

1.  Un **Contenedor** principal que envuelva todo.
2.  Una primera fila para el **Header** que ocupe siempre las 12 columnas.
3.  Una segunda fila que contenga:
    - Un **Sidebar** (Menú lateral) que en móviles no se vea (pista: usa clases de visualización) y en escritorio ocupe 3 columnas.
    - Un **Área de Contenido** que en móvil ocupe las 12 columnas y en escritorio las 9 restantes.
4.  Dentro del Área de Contenido, crea una sub-rejilla (nested grid) con 4 tarjetas que en móvil se vean una debajo de otra y en escritorio se vean todas en una sola fila.

---

### 6. Trivia

1.  Si aplicas la clase `col-lg-4` a un elemento, ¿cuántas columnas ocupará cuando el usuario lo vea desde un iPhone (pantalla pequeña)?
2.  ¿Cuál es la diferencia técnica entre usar `container` y `container-fluid` respecto al ancho de la página?
3.  ¿Por qué se dice que el sistema de rejilla de Bootstrap es "Mobile-First"?
