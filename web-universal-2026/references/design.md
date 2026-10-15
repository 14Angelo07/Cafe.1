# Diseño con identidad y compatibilidad

1. Elegir una dirección ligada al producto: editorial para lectura y narrativa; tipográfica para marca; técnica para herramientas; cálida para atención humana; inmersiva para demostrar un objeto. Estas son opciones, no plantillas obligatorias.
2. Derivar colores de la marca y semántica. No fijar morado, turquesa, fondo negro o gradiente como valores universales. Crear escala neutral y acentos con contraste comprobado. No comunicar estados solo con color.
3. Escoger tipografía por idioma, legibilidad, peso de archivos y licencia. Definir escala fluida con límites; no instalar fuentes externas sin necesidad. Usar fuentes locales/sistema cuando sean suficientes.
4. Diseñar composición según el contenido: ritmo, asimetría moderada, jerarquía, imágenes relevantes y espacios que agrupen información. Evitar que todas las secciones sean la misma cuadrícula de tarjetas. Mantener una acción principal clara.
5. Implementar tokens CSS semánticos y documentar tamaños, espaciado, radios, bordes, capas y foco. Reutilizar componentes con estados, no copiar estilos inconexos.
6. Usar CSS Grid/Flex, propiedades lógicas y tipografía fluida. Adoptar container queries para componentes reutilizables cuando su soporte encaje. Encapsular mejoras con @supports y ofrecer fallback; verificar navegadores objetivos, no asumir soporte por el año.
7. Añadir transiciones como mejora progresiva cuando ayuden a orientar. Comprobar View Transition API antes de usarla; limitar movimiento con prefers-reduced-motion. Mantener el contenido accesible sin animación.
8. Si se pide 3D, decidir entre SVG/CSS con relieve y un modelo interactivo WebGL. No presentar apariencia 3D como un modelo real. Cargar recursos pesados bajo demanda, optimizar texturas y ofrecer imagen alternativa. No bloquear navegación ni el contenido esencial en un canvas.
9. Tomar WCAG 2.2 AA como objetivo comprobable: HTML semántico, etiquetas, teclado, foco visible, reflow, contraste y objetivos táctiles. Verificar manualmente; un escáner automático no demuestra conformidad completa.
10. Medir peso, carga y estabilidad de layout con herramientas disponibles. Reservar dimensiones de imágenes, optimizar formatos y no aplicar lazy loading a la imagen principal que determina la carga inicial. Evaluar datos de campo cuando existan; no inventar puntuaciones.

Para SaaS, ajustar densidad por tarea y dispositivo. Diseñar tablas con cabeceras, orden y filtros reales; preservar contexto al editar; explicar operaciones irreversibles; proporcionar vistas vacías útiles. Los gráficos deben mostrar unidades, período, origen y alternativa legible.
