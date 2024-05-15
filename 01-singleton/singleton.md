# Patrón de Diseño Singleton

Garantiza que una clase tenga solo una instancia y proporciona un punto de acceso global a esa instancia.

- **Beneficios**:
  - Control estricto sobre la creación y el acceso de una única instancia.
  - Ahorro de recursos al evitar la creación de múltiples instancias.
- **Cuándo usar**:
  - Cuando se necesita exactamente una instancia de una clase.
  - Para gestionar conexiones a bases de datos o registros de configuración.
- **Cuándo no usar**:
  - En aplicaciones altamente concurrentes donde un único punto de acceso puede convertirse en un cuello de botella.
  - Cuando la creación de múltiples instancias no afecta negativamente a la aplicación.

## Casos de Uso

**Caso de Uso 1: Configuración Global**

- **Descripción**: Una aplicación tiene una clase `Configuration` que carga la configuración de la aplicación desde un archivo. Esta configuración debe ser accesible globalmente y debe haber solo una instancia de la configuración cargada.
- **Detalle**: Usar el patrón Singleton garantiza que todos los componentes de la aplicación usen la misma configuración.

**Caso de Uso 2: Registro de Log**

- **Descripción**: Una aplicación necesita escribir logs en un archivo. Para evitar problemas de concurrencia y asegurar que todos los mensajes de log se escriban en un solo lugar, se utiliza una clase `Logger` que implementa el patrón Singleton.
- **Detalle**: Usar Singleton asegura que solo haya una instancia de `Logger` y que todos los mensajes se manejen de manera centralizada.

**Caso de Uso 3: Conexión a Base de Datos**

- **Descripción**: Una aplicación necesita conectarse a una base de datos. Para manejar la conexión de manera eficiente y reutilizable, se utiliza una clase `DatabaseConnection` que implementa Singleton.
- **Detalle**: Usar Singleton garantiza que solo haya una instancia de la conexión a la base de datos, evitando conexiones innecesarias y ahorrando recursos.

## Ejemplos

- [Javascript](./examples/javascript.js)
- [TypeScript](./examples/typescript.ts)
- [PHP](./examples/php.php)
- [Python](./examples/python.py)
