# Patrón de Diseño Proxy

Proporciona un sustituto o marcador de posición para otro objeto para controlar el acceso a él.

- **Beneficios**:
  - Controla el acceso a objetos, añadiendo una capa de seguridad.
  - Puede realizar operaciones adicionales antes o después de acceder al objeto real.
- **Cuándo usar**:
  - Cuando se necesita controlar el acceso a un objeto.
  - Para implementar controles de seguridad o carga diferida (lazy loading).
- **Cuándo no usar**:
  - Cuando el acceso directo a los objetos es suficiente y no requiere control adicional.
  - Cuando la sobrecarga del proxy no se justifica.

## Casos de Uso

**Caso de Uso 1: Control de Acceso a Recursos**

- **Descripción**: Una aplicación necesita controlar el acceso a un recurso crítico (Base de datos). Utiliza un `DatabaseProxy` para controlar el acceso a la base de datos.
- **Detalle**: El patrón Proxy permite controlar el acceso a recursos críticos proporcionando un intermediario.

**Caso de Uso 2: Carga Diferida**

- **Descripción**: Una aplicación de imágenes necesita cargar imágenes grandes solo cuando se necesitan. Utiliza un `ImageProxy` para cargar las imágenes de manera diferida.
- **Detalle**: El patrón Proxy permite implementar la carga diferida de recursos pesados.

**Caso de Uso 3: Comunicación Remota**

- **Descripción**: Una aplicación cliente necesita comunicarse con un servicio remoto. Utiliza un `RemoteProxy` para manejar la comunicación con el servicio remoto.
- **Detalle**: El patrón Proxy permite manejar la comunicación remota proporcionando un intermediario.

## Ejemplos

- [Javascript](./examples/javascript.js)
- [TypeScript](./examples/typescript.ts)
- [PHP](./examples/php.php)
- [Python](./examples/python.py)
