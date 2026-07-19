# Nivel 3.4: Formulario Pro - Captura y Validación con v-model

¡Qué tal! En esta clase vamos a dominar la interacción más crítica: los formularios. Ya no estamos en la era de "enviar y esperar"; el usuario espera que la web reaccione mientras escribe. Vamos a fusionar la estética de Bootstrap 5 con el "cerebro" de Vue para crear formularios que validan y sincronizan datos en tiempo real [2].

### Conceptos Clave

- **Enlace Bidireccional (`v-model`):** Es el puente de doble vía. Si el usuario escribe en un `<input>`, la variable en Vue cambia. Si Vue cambia la variable internamente, el texto en el navegador se actualiza solo [2, 3].
- **Controles de Bootstrap:** Usamos clases como `form-control` para que los inputs se vean modernos y ocupen el ancho correcto según el diseño [2].
- **Validación Visual:** Bootstrap ofrece estados predefinidos: `is-invalid` (borde rojo) e `is-valid` (borde verde). Los activamos dinámicamente con `:class` basándonos en nuestras reglas de negocio [2].
- **Modificadores de Eventos:** Usamos `@submit.prevent` para procesar los datos con JavaScript sin que la página se recargue, eliminando comportamientos del siglo pasado [2, 3].

#### Enseñanza Comparativa: Captura de Datos

- **Vanilla JavaScript (Enfoque Manual):**

```javascript
const nombreInput = document.querySelector("#nombre");
const valorActual = nombreInput.value;
nombreInput.addEventListener("input", (event) => {
  console.log(event.target.value);
});
```

- **Vue.js (Enfoque Automático):**

```html
<input v-model="nombre" class="form-control" type="text" />
<!-- Vue mantiene la variable 'nombre' sincronizada siempre -->
```

---

### Buenas Prácticas

- **Accesibilidad Semántica:** Vincula siempre tus `<label>` con el `<input>` usando el atributo `for` y un `id` único. Esto mejora la experiencia en dispositivos móviles y para lectores de pantalla [2, 4].
- **Lógica en el Script:** No ensucies el HTML con validaciones complejas. Si la regla es "el correo debe tener un @ y más de 5 letras", evalúa eso en una propiedad en tu código para mantenerlo autodocumentado [4].
- **Feedback dinámico:** Coloca etiquetas `<div class="invalid-feedback">` justo debajo del input. Bootstrap solo las mostrará si el input tiene la clase `is-invalid` [2, 4].

---

### Ejemplos de Código

**Validación Reactiva de Email:**

```html
<div class="mb-3">
  <label for="email" class="form-label">Correo del Arquitecto</label>
  <input
    v-model="correo"
    id="email"
    type="email"
    class="form-control"
    :class="correo.includes('@') ? 'is-valid' : 'is-invalid'"
  />
  <div class="invalid-feedback">Introduce un correo válido.</div>
</div>
```

---

### Planificación Proactiva

**Nota Estratégica:** Al organizar los datos del formulario dentro de un objeto único en `data()` (ej. `formulario: { nombre: '', email: '' }`), preparamos la arquitectura para enviar toda la información a una base de datos externa con una sola línea de código en niveles avanzados [5].

---

### Mini-Proyecto: Registro de Arquitectos VIP

**Objetivo:** Crear un formulario de registro profesional que valide datos en tiempo real antes de permitir el envío.

**Requerimientos:**

1.  Usa el **Grid de Bootstrap** para centrar el formulario en la pantalla (`col-md-6 mx-auto`).
2.  Campos requeridos: **Nombre**, **Especialidad** (usando un `<select>`) y **Años de Experiencia**.
3.  **Validación visual:**
    - El campo Nombre debe ser `is-valid` solo si tiene más de 3 letras.
    - El campo Años de Experiencia debe ser un número mayor a 0.
4.  **Botón de Envío:** Debe estar deshabilitado (`:disabled`) mediante Vue hasta que todos los campos cumplan las condiciones.
5.  Al hacer clic en "Registrar", muestra una **alerta de Bootstrap** con un mensaje de éxito sin recargar la web [5].

---

### Trivia

1.  ¿Cuál es la diferencia operativa entre usar `{{ variable }}` y `v-model="variable"`? [3]
2.  ¿Qué clase de Bootstrap se usa para resaltar un input con color rojo tras un error de validación? [2]
3.  ¿Qué modificador de evento evita que el formulario refresque la web al enviarse? [2, 3]
