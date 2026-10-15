# Bases de datos según la necesidad

## Decisión

| Necesidad | Elección posible | Condición |
|---|---|---|
| Sitio que solo muestra contenido | Sin base | No añadir persistencia artificial |
| App local / pequeño servicio de una instancia | SQLite | Evaluar concurrencia, respaldo y acceso compartido |
| Producto relacional y múltiples usuarios/empresas | PostgreSQL o MySQL | Elegir según entorno, experiencia y requisitos; no imponer uno |
| Backend administrado | Proveedor compatible | Verificar límites, región, autorización, costos y portabilidad |
| CSV/Excel | Importación/exportación | No tratarlo como base transaccional de un SaaS |

## Modelo y migraciones

Derivar entidades y relaciones del dominio. Definir clave primaria, claves foráneas, NOT NULL, unicidad, checks compatibles e índices a partir de consultas reales. Usar migraciones versionadas; no resetear datos para solucionar un cambio de esquema. No ejecutar automáticamente migraciones destructivas en producción. Definir respaldo y estrategia de recuperación antes de operaciones de riesgo. Verificar fechas/zonas y conservar precisión de dinero con decimal/unidades mínimas según moneda.

## Acceso e integridad

Usar queries parametrizadas u ORM compatible, transacciones para operaciones que deban completarse juntas y paginación con orden estable. Manejar conflictos de unicidad y carreras en la base, no solo en UI. Evitar N+1, medir consultas relevantes y no indexar todo por rutina. Dar privilegios mínimos al usuario de aplicación y separar migraciones cuando el entorno lo permita.

## Multiempresa

Incluir tenant_id cuando el modelo lo requiera. Verificar membresía en servidor y transportar contexto con cada operación. Incluir tenant en claves/relaciones compuestas cuando haga falta impedir referencias cruzadas. Aislar ficheros, búsquedas, caché y jobs además de tablas.

Con PostgreSQL RLS, comprobar ENABLE/FORCE, roles que pueden omitir políticas, propiedad de tablas y comportamiento del pool. El dueño suele evitar RLS; BYPASSRLS y superusuarios también. Usar un rol de ejecución de mínimos privilegios. Establecer contexto de tenant desde sesión verificada con alcance transaccional y consultas parametrizadas; no aceptar un tenant arbitrario del cliente ni dejar contexto en conexiones reutilizadas. Probar acceso permitido y denegado con el rol efectivo de producción. No copiar políticas genéricas sin comprobar el modelo de autenticación del proveedor.

## Operación y exportación

Documentar qué se guarda, dónde, cuánto tiempo y quién accede. Evitar recopilar datos innecesarios. Crear respaldos y probar restauración. Diseñar eliminación/retención y auditabilidad según dominio.

Exportar solamente datos autorizados. Neutralizar fórmulas de CSV/Excel y probar nombres que comiencen por =, +, - o @; preferir celdas explícitas de texto en XLSX. Validar tamaño/formato de importaciones y reportar filas inválidas. No incluir datos reales en repositorios, ZIPs ni fixtures.
