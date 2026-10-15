# Ingeniería adaptable

## Elegir tecnología

Respetar el stack solicitado y las convenciones existentes. Para sitios estáticos, preferir herramientas simples o un generador estático si el contenido lo necesita. Para productos con estado, SSR y rutas, elegir un framework soportado compatible con el despliegue. TypeScript aporta contratos en proyectos JS que lo justifican; no convertir una aplicación Python solo por moda.

Consultar documentación del framework sobre límites cliente/servidor, caché, formularios y rutas. Evitar añadir una librería por cada detalle que la plataforma resuelve. Mantener lockfile, versiones reproducibles y comandos de instalación, ejecución, checks y build. No usar paquetes «latest» como requisito permanente sin resolver y fijar la versión.

## Estructura y contratos

Agrupar por capacidad cuando el producto crezca. Separar UI, estado de presentación, dominio/casos de uso y acceso a datos. Para proyectos pequeños, usar pocas carpetas claras. Modelar contratos de entrada y salida; validar en el servidor y devolver errores útiles sin stack traces al cliente. Documentar variables de entorno sin valores secretos.

Usar HTTPS para servicios expuestos, secretos en servidor y mínimo privilegio. Tratar cargas de archivos como entrada no confiable: tamaño, tipo, nombre, autorización y ubicación privada si corresponde. Evitar eval, HTML no sanitizado e interpolación de SQL. Aplicar rate limits e idempotencia donde eviten abuso o duplicación. No guardar sesiones sensibles en localStorage como elección automática.

## Comportamiento funcional

Implementar todos los botones del flujo acordado. Gestionar carga, vacío, error y reintento. Evitar doble envío; mostrar éxito solo tras respuesta y persistencia reales. No generar reportes o pantallas con datos simulados sin identificarlos. Al integrar WhatsApp, email o pagos, distinguir apertura, solicitud, entrega y confirmación.

## Verificación

Elegir pruebas que comprueben el negocio: un flujo guardado y recuperado, errores de validación, usuario sin permiso y operación fallida. Para SaaS multiempresa, probar siempre el aislamiento de datos. Ejecutar checks existentes apropiados; no agregar tests que solo repiten la estructura de componentes. Revisar consola y red con navegador cuando esté disponible y autorizado. Si una herramienta o servicio no está disponible, reportar la prueba pendiente.

Para producción, usar el servidor adecuado, configuración por entorno, migraciones, observabilidad, respaldos y comprobación de restauración. Separar claramente prototipo de despliegue operativo; no equiparar build exitoso a producción verificada.
