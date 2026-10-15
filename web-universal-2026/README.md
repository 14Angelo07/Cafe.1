# Café Angelo - Página Web

Página web sencilla para una cafetería llamada Café Angelo, creada con HTML, CSS y JavaScript puro.

## Estructura del proyecto

```
web-universal-2026/
├── index.html      # Página principal
├── style.css       # Estilos CSS
├── script.js       # Lógica de JavaScript
└── README.md       # Este archivo
```

## Cómo abrir la web

### Opción 1: Abrir directamente en el navegador (más simple)
1. Navega a la carpeta `web-universal-2026`
2. Haz doble clic en el archivo `index.html`
3. El archivo se abrirá en tu navegador predeterminado

### Opción 2: Usar un servidor local (recomendado para desarrollo)
Si tienes Python instalado:
```bash
# Desde la carpeta web-universal-2026
python -m http.server 8000
```
Luego abre tu navegador y visita: http://localhost:8000

Si tienes Node.js instalado:
```bash
# Desde la carpeta web-universal-2026
npx serve
```
O instala serve globalmente:
```bash
npm install -g serve
serve
```
Luego abre tu navegador y visita: http://localhost:3000

## Características

- Diseño responsive que se adapta a móviles y escritórios
- Navegación fija en la parte superior
- Sección de inicio atractiva
- Información sobre la cafetería
- Menú interactivo con filtrado por categorías (Cafés, Tés, Repostería)
- Sección de contacto con enlace directo a WhatsApp
- Footer con información de copyright

## Tecnologías utilizadas

- HTML5 semántico
- CSS3 con Flexbox y Grid
- JavaScript ES6 puro (sin frameworks)
- Diseño responsive con media queries

## Personalización

Para modificar el contenido:
- Edita `index.html` para cambiar la estructura
- Modifica `style.css` para cambiar los estilos
- Actualiza los datos en `script.js` para cambiar los productos del menú
- Reemplaza las URLs de placeholder con imágenes reales cuando las tengas disponibles

## Colores utilizados

- Marrón oscuro (#8B4513) - Para encabezados y acentos
- Marrón claro (#D2691E) - Para botones y destacados
- Crema (#fff8f0) - Para fondos de secciones
- Blanco (#ffffff) - Para fondos principales
- Gris (#333, #666) - Para texto