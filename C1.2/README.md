# Nivel 1.2: CSS3 - El Arte del Diseño

Una estructura web sin estilos es solo texto plano. En este módulo aprenderás a transformar esqueletos HTML en interfaces visuales profesionales y escalables controlando las reglas estéticas de CSS3.

---

## 🧠 Conceptos Clave

### 🎯 Selectores

Son las herramientas que nos permiten "apuntar" de forma precisa a un elemento del HTML para aplicarle reglas de diseño. Se dividen principalmente en tres categorías:

- **Por Etiqueta:** Afecta a todos los elementos del mismo tipo (ej. `p { ... }`).
- **Por Clase:** Selecciona múltiples elementos que compartan el atributo `class` (ej. `.clase { ... }`).
- **Por ID:** Selecciona un único elemento mediante su atributo `id` (ej. `#id { ... }`).

### 📂 Separación de Archivos

**Nunca escribas estilos directamente dentro de tus archivos HTML**. La arquitectura limpia exige crear un archivo independiente con extensión `.css` (por ejemplo, `style.css`) y conectarlo dentro del contenedor `<head>` del HTML utilizando la etiqueta de enlace:

```html
<link rel="stylesheet" href="style.css" />
```

### 📦 Modelo de Caja (Box Model)

Cada elemento que se renderiza en el navegador es conceptualmente una caja rectangular compuesta por cuatro capas cruciales:

- **Content:** El texto o imagen real del elemento.
- **Padding:** El espacio interior transparente entre el contenido y el borde.
- **Border:** La línea limítrofe o contorno de la caja.
- **Margin:** El espacio exterior que separa a esta caja de los demás elementos vecinos.

---

## 🎨 Buenas Prácticas

- **Principio DRY (Don't Repeat Yourself):** Si notas que múltiples componentes de tu interfaz van a compartir los mismos colores, fuentes o márgenes, define una clase común en CSS y reutilízala en el HTML en lugar de repetir líneas de código idénticas.
- **Uso de Colores Hexadecimales:** Evita los nombres de colores genéricos (como `blue` o `red`). Utiliza códigos hexadecimales de precisión profesional (como `#42b983`) para garantizar la fidelidad con los diseños originales de interfaz.

---

## 💻 Ejemplo de Código

Estructura tu archivo externo `style.css` de forma limpia y legible:

```css
/* style.css */
body {
  font-family: sans-serif;
  background-color: #f4f4f4;
}

.card {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
}
```

---

## 🚀 Planificación Proactiva

> 💡 **Nota Estratégica:** Separar el código de estilos en un archivo CSS externo no es solo por orden visual; permite que el navegador del usuario almacene dicho archivo en su memoria "caché". Al navegar por el resto de la web, el CSS no se vuelve a descargar, logrando que tu aplicación cargue de manera ultra rápida en visitas posteriores.

---

## 🛠️ Mini-Proyecto: "Tarjeta de Perfil"

**Instrucciones:**
Toma la estructura HTML desarrollada en el mini-proyecto del nivel anterior (Nivel 1.1) y dale un diseño visual profesional:

1. Aplica un color de fondo gris claro (`#f4f4f4`) al cuerpo completo de la web (`body`).
2. Transforma los artículos independientes (`<article>`) en tarjetas blancas elegantes.
3. Asegúrate de añadirles bordes redondeados (`border-radius`), espaciado interno equilibrado (`padding`) y una sutil sombra para darles profundidad visual.

---

## ❓ Trivia

1. **¿Qué carácter se utiliza en CSS para apuntar a una clase?**
   - _Respuesta:_ Se utiliza el punto (`.`).
2. **¿Qué propiedad del modelo de caja altera el espacio interior entre el contenido y su borde?**
   - _Respuesta:_ La propiedad `padding`.
3. **¿Cuál es la ventaja de rendimiento al usar un archivo CSS externo en lugar de estilos internos?**
   - _Respuesta:_ Permite la reutilización global del código en múltiples páginas y optimiza el rendimiento gracias al almacenamiento en la caché del navegador.
