# Nivel 1.1: HTML5 - El Esqueleto Semántico

¡Bienvenidos a tu primer paso en el desarrollo web estructural! En este módulo aprenderás a construir los cimientos sólidos de cualquier aplicación web utilizando HTML5 moderno y semántico.

---

## 🧠 Conceptos Clave

### 🏷️ Etiquetas y Atributos

Todo en HTML se construye mediante **etiquetas** (`<etiqueta>`). Los **atributos** (como `id`, `class`, `src`) se añaden dentro de la etiqueta de apertura para proporcionar metadatos, configuraciones o identificadores únicos al elemento.

### 🏗️ Estructura Base

Un documento HTML perfectamente estructurado siempre debe iniciar con la declaración del tipo de documento, seguido por los contenedores esenciales del ciclo de vida de la página:

- `<!DOCTYPE html>`: Le indica al navegador que estamos usando la última versión de HTML (HTML5).
- `<html>`: El nodo raíz que envuelve todo el contenido.
- `<head>`: Contenedor de configuraciones, metadatos, enlaces a estilos y el título de la pestaña (no visible para el usuario).
- `<body>`: Contenedor principal de todo el contenido visual e interactivo que el usuario final consumirá.

### 🧱 Semántica Moderna

En el desarrollo profesional actual, **ya no usamos `<div>` para todo**. Reemplazamos los contenedores genéricos por etiquetas semánticas nativas que permiten al navegador y a los motores de búsqueda "entender" exactamente qué tipo de información estamos mostrando:

- `<header>`: Cabecera del sitio o de una sección.
- `<nav>`: Bloque de enlaces de navegación principal.
- `<main>`: El contenido central y principal único de la página.
- `<section>`: Un grupo o temática de contenido lógica dentro de la web.
- `<footer>`: El pie de página con información de derechos, contacto o enlaces secundarios.

---

## 🎨 Buenas Prácticas

- **Jerarquía de Títulos Estricta:** Solo debe existir **un único `<h1>` por página web**. Esto es una regla crítica para el posicionamiento orgánico en motores de búsqueda (SEO). Los subtítulos internos deben seguir una escalera ordenada (`<h2>`, `<h3>`, etc.).
- **Minimización de Divs:** Si el elemento que estás programando representa un artículo independiente o un bloque de contenido con sentido propio, usa la etiqueta `<article>` en lugar de recurrir a un `<div class="article">`.

---

## 💻 Ejemplo de Código

Aquí tienes una estructura limpia, semántica y minimalista:

```html
<main>
  <header>
    <h1>Mi Portafolio Profesional</h1>
  </header>

  <section id="sobre-mi">
    <p>
      Soy desarrollador fullstack en formación con un enfoque en arquitectura
      limpia.
    </p>
  </section>
</main>
```

---

## 🚀 Planificación Proactiva

> 💡 **Nota Estratégica:** Usar etiquetas semánticas desde el día 1 garantiza que tu aplicación sea completamente accesible para lectores de pantalla utilizados por personas con discapacidad visual, además de ser sumamente fácil de indexar y posicionar por Google sin necesidad de realizar esfuerzos extras de SEO en el futuro.

---

## 🛠️ Mini-Proyecto: "Estructura de Blog"

**Instrucciones:** Crea el esqueleto estructural para una página de blog. Debe contener de forma jerárquica:

1. Una cabecera principal (`<header>`).
2. Una sección principal (`<main>`) que aloje en su interior dos artículos independientes (`<article>`).
3. Un pie de página (`<footer>`) bien definido.

_Recuerda utilizar únicamente etiquetas semánticas y evitar el uso de etiquetas genéricas como `<div>`._

---

## ❓ Trivia

1. **¿Qué etiqueta define el contenido principal y único de una página web?**
   - _Respuesta:_ La etiqueta `<main>`.
2. **¿Para qué sirve el atributo `id` en HTML?**
   - _Respuesta:_ Sirve para identificar de forma única y absoluta a un elemento específico dentro de todo el documento.
3. **¿Es estrictamente obligatorio cerrar todas las etiquetas en HTML5?**
   - _Respuesta:_ En HTML5, omitir cierres no siempre detiene la renderización, pero **sí es obligatorio cerrarlas como buena práctica** para evitar errores imprevistos en la interpretación de los layouts de los navegadores.
