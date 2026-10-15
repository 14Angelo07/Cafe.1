---
name: web-universal-2026
description: Crear o mejorar páginas web, sitios, landing pages, portafolios, tiendas y portales con identidad visual propia, frontend, backend y datos cuando se necesiten. Usar para construir sitios completos o rediseñar una web; preferir saas-universal-2026 para productos con cuentas, organizaciones y flujos operativos. No activar por preguntas aisladas de sintaxis.
---
# Web universal 2026

Crear el sitio solicitado hasta un resultado ejecutable y verificable. Tratar «2026» como fecha de revisión inicial, no como una estética fija ni garantía de actualización automática.

## 1. Entender y comprobar

Leer AGENTS.md, estructura, dependencias, lockfile y comandos existentes antes de editar. Preservar el stack compatible y el contenido real del usuario. Identificar público, acción principal, contenido disponible, necesidades de persistencia y destino de ejecución. Resolver decisiones reversibles con criterio; preguntar únicamente por información que cambie materialmente el alcance. Si faltan datos de negocio, marcar los campos pendientes; no inventar personas, métricas o testimonios.

Consultar documentación oficial de la tecnología antes de usar APIs recientes o elegir versiones en un proyecto nuevo. Comprobar estabilidad y compatibilidad con runtime y hosting; registrar fecha, enlaces y versiones efectivamente usadas. Leer [sources.md](references/sources.md) como punto de partida, no como una lista de versiones a instalar. Si no hay red, usar APIs verificadas en las dependencias locales y declarar el límite.

## 2. Diseñar una identidad

Leer [design.md](references/design.md). Definir en 5 líneas el concepto visual: público, sensación buscada, tipografía, paleta justificada y composición distintiva. Seguir la referencia del usuario cuando exista. Si no existe, escoger una dirección adecuada y avanzar, mostrando alternativas solo cuando sean útiles. No repetir por defecto el diseño de otro proyecto. Crear tokens por función (fondo, superficie, texto, acento, borde, estados), componentes y responsive adaptados al contenido. Usar 3D cuando explique o dé carácter al producto, con alternativa ligera accesible.

## 3. Construir el flujo real

Leer [engineering.md](references/engineering.md). Elegir la solución mínima que cumple: HTML/CSS/JS para sitios sencillos, framework para navegación y estado que lo justifiquen. Implementar todas las acciones visibles; enlazar rutas reales. Separar presentación, reglas y acceso a datos sin imponer carpetas inútiles. Gestionar formularios con validación cliente y servidor, carga, error, reintento y éxito real.

Si se necesitan registros, leer [data.md](references/data.md). Elegir base por requisitos y entorno; usar migraciones, restricciones y consultas parametrizadas. No sustituir el backend solicitado por localStorage. No añadir una base a un sitio informativo que no guarda datos. Conectar integraciones solo cuando existan credenciales y autorización; señalar explícitamente lo que permanece pendiente.

## 4. Verificar y entregar

Probar el recorrido principal y las rutas de fallo de cada integración. Comprobar teclado, foco, tamaños móviles y escritorio, contraste y movimiento reducido. Ejecutar checks disponibles de compilación/tipos y pruebas relevantes. Si hay navegador autorizado, inspeccionar el resultado y corregir fallos; si no, distinguir pruebas de código de revisión visual pendiente. No afirmar «100 % funcional» por compilación solamente.

Entregar cómo instalar, iniciar, configurar y desplegar; ejemplos sin secretos, ubicación de datos y pruebas realizadas. Distinguir prototipo, ejecución local y producción. Mantener la información técnica en documentación, fuera de los flujos del visitante. Si el usuario pidió ZIP, excluir secretos, datos de personas, node_modules y archivos temporales.
