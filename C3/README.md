# Nivel 3: Estilización Profesional y Bootstrap 5

¡Qué tal, colega arquitecto! En este nivel vamos a dar el salto de calidad definitivo. Ya sabemos cómo hacer que una web funcione y tenga lógica reactiva; ahora vamos a hacer que se vea y se sienta de élite. Vamos a integrar **Bootstrap 5** con **Vue.js** para construir interfaces profesionales, responsivas y consistentes sin perder el tiempo reinventando la rueda.

---

## 3.1: Sistema de Rejilla (Grid) - Maquetación Pro y Responsiva

### Conceptos Clave

El Grid de Bootstrap es un sistema basado en Flexbox que divide la pantalla en **12 columnas** invisibles.

- **Contenedores (`container`):** El marco que encierra tu obra. El `container` deja márgenes elegantes, mientras que `container-fluid` ocupa todo el ancho.
- **Filas (`row`):** Son los rieles horizontales. Su función es agrupar columnas y corregir espacios.
- **Columnas (`col-`):** La unidad de medida. Si quieres que algo ocupe la mitad, usas 6 de 12.
- **Breakpoints:** Etiquetas (`sm`, `md`, `lg`) que definen cuándo cambia el diseño según el dispositivo (móvil, tablet o PC).

### Buenas Prácticas

Diseña siempre con la mentalidad **Mobile-First**. Empieza definiendo cómo se verá en un celular (usando `col-12` por defecto) y luego añade las clases para pantallas más grandes. Nunca fuerces anchos fijos en píxeles; deja que el Grid calcule las proporciones por ti.

### Ejemplos de Código

```html
<div class="container text-center">
  <div class="row">
    <div class="col-12 col-md-6 bg-primary">Celular: Todo / PC: Mitad</div>
    <div class="col-12 col-md-6 bg-success">Celular: Todo / PC: Mitad</div>
  </div>
</div>
```

### Planificación Proactiva

**Nota de Arquitectura:** Al usar la rejilla nativa de Bootstrap en lugar de layouts manuales, garantizas que tu App sea compatible con miles de dispositivos sin escribir una sola Media Query adicional, facilitando la inserción de nuevos componentes en el futuro.

---

## 3.2: Componentes de Interfaz - UI Lista para la Batalla

### Conceptos Clave

Bootstrap nos entrega una caja de herramientas con elementos pre-diseñados y probados:

- **Botones (`btn`):** Estilos limpios y consistentes para acciones.
- **Tarjetas (`card`):** El estándar de la industria para mostrar productos o perfiles con bordes y sombras profesionales.
- **Utilidades:** Clases rápidas para márgenes (`mt-3`, `mb-2`) y rellenos (`p-4`), que permiten retocar el diseño sin tocar el CSS.

### Buenas Prácticas

No personalices el CSS de Bootstrap a menos que sea estrictamente necesario. Confía en las clases de utilidad para mantener el código HTML ligero y el archivo CSS casi vacío.

### Ejemplos de Código

```html
<div class="card shadow-sm" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Título Pro</h5>
    <p class="card-text">Bootstrap hace que esto se vea genial en 3 líneas.</p>
    <button class="btn btn-primary w-100">Comprar</button>
  </div>
</div>
```

---

## 3.3: Binding Dinámico - Uniendo Vue con Bootstrap (`:class` y `:style`)

### Conceptos Clave

Aquí es donde ocurre la verdadera magia Fullstack. Vue puede "encender" o "apagar" clases de Bootstrap basándose en tus datos.

- **`:class`:** Pasamos un objeto donde la **llave** es la clase de Bootstrap y el **valor** es una condición booleana.

#### Enseñanza Comparativa: Estilos Dinámicos

- **Vanilla JavaScript (Imperativo):** Debes buscar el elemento por ID, entrar a su `classList` y usar `toggle()` o `add()` cada vez que algo cambie. Es tedioso y fácil de romper.
- **Vue.js (Declarativo):** Solo declaras la regla en el HTML una vez. Si la variable cambia en el "cerebro", la clase se aplica o se quita sola. El HTML reacciona a los datos.

### Buenas Prácticas

### Ejemplos de Código (Enfoque Reactivo)

```html
<div id="app" class="container mt-5">
  <!-- El botón cambia de color según el estado 'activo' -->
  <button
    @click="activo = !activo"
    :class="activo ? 'btn-success' : 'btn-secondary'"
    class="btn"
  >
    {{ activo ? 'Encendido' : 'Apagado' }}
  </button>
</div>
```

Mantén la lógica en el script. Si la condición para aplicar una clase es muy larga o compleja, muévela a una propiedad en tu código para que el HTML se mantenga limpio y fácil de leer.

### Planificación Proactiva

**Nota de Arquitectura:** Centralizar el estilo en el estado de los datos permite que el diseño cambie dinámicamente según la lógica de negocio sin que el desarrollador tenga que preocuparse por la manipulación directa del DOM.

---

## 3.4: Formulario Pro - Captura y Validación con `v-model`

### Conceptos Clave

Combinamos los inputs de Bootstrap con la directiva `v-model` para una sincronización perfecta.

- **Validación en tiempo real:** Usamos binding dinámico para aplicar clases como `is-invalid` (borde rojo) o `is-valid` (borde verde) mientras el usuario escribe.

### Buenas Prácticas

Acompaña siempre tus inputs con etiquetas `<label>` e identifica cada campo con un `id` único. Bootstrap utiliza esta estructura para mejorar la accesibilidad y la experiencia táctil en móviles.

### Ejemplos de Código

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
```k

---

## Mini-Proyecto: Panel de Gestión de Inventario

**Objetivo:** Crear una lista de productos profesional usando el Grid de Bootstrap.

1.  Cada producto debe mostrarse en una `card`.
2.  Si el stock del producto llega a 0, la tarjeta debe cambiar su borde a rojo automáticamente (`border-danger`) y el botón de "Comprar" debe desactivarse.
3.  El diseño debe mostrar una columna en móviles y tres columnas en escritorio.

**Estrategia de Arquitectura:** Al mapear un array de objetos a componentes de Bootstrap mediante Vue, creamos una interfaz escalable que puede manejar 5 o 500 productos con el mismo código, manteniendo la consistencia visual en todo momento.

---

## Trivia

1.  ¿Cuántas columnas totales componen el sistema de rejilla estándar de Bootstrap?
2.  ¿Qué directiva de Vue usarías para añadir la clase `text-success` solo cuando una variable llamada `completado` sea verdadera?
3.  ¿Cuál es la diferencia técnica entre `container` y `container-fluid` en cuanto al comportamiento del ancho de la página?
