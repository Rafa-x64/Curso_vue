# Nivel 2: Estructuras Dinámicas e Interactividad

## 2.1 Decisiones Inteligentes: v-if vs. Manipulación Manual

¡Qué tal, futuro arquitecto! En el nivel anterior montamos nuestra primera App de Vue [1]. Ahora vamos a darle "cerebro". Aprenderás a que tu interfaz tome decisiones sola, sin que tú tengas que estar persiguiendo etiquetas para cambiarlas a mano [1].

### Conceptos Clave

En el desarrollo web tradicional (Vanilla JS), si querías que algo desapareciera, tenías que buscar el elemento físicamente en el árbol del documento y cambiarle el estilo o borrarlo del HTML [1, 2]. En Vue, simplemente condicionamos su existencia basándonos en los datos [1].

- **¿Qué es una Directiva?:** Son atributos especiales de HTML que empiezan con el prefijo `v-`. Piensa en ellos como "superpoderes" que le dicen al HTML cómo comportarse dinámicamente [3].
- **v-if:** Es una directiva que evalúa una condición lógica. Si es `true`, el elemento existe; si es `false`, Vue **elimina físicamente** el elemento del DOM (no es que lo oculte con CSS, es que deja de existir en el navegador) [3-5].
- **v-else:** Debe ir justo debajo de un `v-if`. Se muestra automáticamente si la primera condición falla, funcionando exactamente como un if/else en programación tradicional [3, 4].
- **Enfoque Declarativo:** En lugar de dar órdenes paso a paso ("busca el botón", "escóndelo"), solo declaramos el estado deseado ("este botón solo existe si el usuario está logueado") y Vue se encarga del trabajo sucio [2, 6].

### Buenas Prácticas

- **Estado Semántico:** Usa variables con nombres que describan un estado claro, como `estaCargando`, `esVisible` o `sesionActiva`. Esto hace que tu código se lea como una frase natural [4].
- **v-if vs v-show:** Usa `v-if` cuando el elemento no se necesite frecuentemente, ya que tiene un costo de renderizado mayor al insertar/eliminar nodos. Si necesitas prender y apagar algo mil veces por segundo (como un modal que se abre mucho), es arquitectónicamente más óptimo usar directivas que solo cambien el CSS [7].
- **Aislamiento de Lógica:** Mantén la lógica de la condición lo más simple posible en el HTML. Si la validación es muy larga, mejor procésala antes en tu script [8].

### Ejemplos de Código (Enseñanza Comparativa)

#### Caso: Mostrar u ocultar una alerta de error

**Enfoque Tradicional (Vanilla JS - Imperativo):**

```javascript
const alerta = document.querySelector("#alerta");
if (hayError) {
  alerta.style.display = "block";
} else {
  alerta.style.display = "none";
}
```

**Enfoque Moderno (Vue.js - Declarativo):**

```html
<!-- El HTML reacciona solo al cambio del dato 'hayError' -->
<div v-if="hayError" class="alerta">Hubo un problema</div>
<div v-else class="exito">¡Todo salió bien!</div>
```

### Planificación Proactiva

**Nota de Arquitectura:** Utilizar el ciclo de renderizado condicional nativo del framework garantiza el aislamiento de capas. Esto permite cambiar las reglas de negocio en el script sin alterar ni una sola línea de la estructura del árbol HTML, facilitando enormemente la escalabilidad futura [7].

### Mini-Proyecto: Panel de Autenticación Reactivo

**Objetivo:** Crear una estructura funcional de un sistema que simule la transición entre un estado de sesión activa y un formulario de acceso [7].

**Instrucciones:**

1.  Define una variable booleana `estaLogueado` en el `data()` de tu app.
2.  Crea un contenedor para el "Formulario de Acceso" que solo se vea si `estaLogueado` es falso.
3.  Crea un contenedor de "Bienvenida" que solo se vea si `estaLogueado` es verdadero.
4.  Usa un botón para cambiar el valor de la variable y observa cómo Vue intercambia los componentes en el DOM instantáneamente [7, 9].

### Trivia

1.  **¿Cuál es la diferencia principal en el DOM entre un elemento con `v-if="false"` y uno oculto con CSS?**
    - _Respuesta:_ `v-if="false"` elimina el elemento físicamente del árbol del DOM, mientras que ocultarlo con CSS solo lo esconde visualmente pero el nodo sigue existiendo [4, 5, 7].
2.  **¿Por qué se considera una mala práctica manipular el DOM con `document.getElementById` cuando usas Vue?**
    - _Respuesta:_ Porque rompes la sincronización automática de Vue. Si tú modificas el DOM manualmente, Vue ya no puede garantizar que la interfaz refleje fielmente el estado de tus datos [6, 7].
3.  **Si un modal se abre y cierra repetidamente cada vez que el usuario pulsa un botón, ¿qué es lo más óptimo arquitectónicamente?**
    - _Respuesta:_ Aunque `v-if` funciona, para elementos de alta frecuencia es mejor usar técnicas que solo alteren la visibilidad CSS sin reconstruir el nodo cada vez [7].
