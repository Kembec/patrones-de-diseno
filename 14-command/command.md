# Patrón de Diseño Command

Encapsula una solicitud como un objeto, permitiendo parametrizar a los clientes con diferentes solicitudes, colas o registros de solicitudes.

- **Beneficios**:
  - Desacopla el objeto que invoca la operación de aquel que la realiza.
  - Permite la implementación de operaciones de deshacer (undo) y rehacer (redo).
- **Cuándo usar**:
  - Cuando se necesita parametrizar objetos con operaciones.
  - Para implementar colas de tareas, operaciones de deshacer y rehacer.
- **Cuándo no usar**:
  - Cuando el desacoplamiento de la solicitud y el receptor no es necesario.
  - Cuando la complejidad del patrón no se justifica.

## Casos de Uso

**Caso de Uso 1: Deshacer Operaciones**

- **Descripción**: Una aplicación de edición de texto necesita permitir deshacer y rehacer operaciones (Cortar, Copiar, Pegar). Utiliza comandos (`Command`) para encapsular estas operaciones.
- **Detalle**: El patrón Command permite implementar funcionalidades de deshacer y rehacer de manera estructurada.

**Caso de Uso 2: Programación de Tareas**

- **Descripción**: Un sistema de automatización necesita programar tareas para ser ejecutadas en diferentes momentos. Utiliza comandos (`Command`) para encapsular las tareas.
- **Detalle**: El patrón Command permite programar y ejecutar tareas de manera flexible y estructurada.

**Caso de Uso 3: Interfaz de Usuario**

- **Descripción**: Una aplicación GUI necesita ejecutar diferentes acciones cuando se presionan botones. Utiliza comandos (`Command`) para encapsular las acciones.
- **Detalle**: El patrón Command permite desacoplar la lógica de ejecución de las acciones de la interfaz de usuario.

## Ejemplos

- [Javascript](./examples/javascript.js)
- [TypeScript](./examples/typescript.ts)
- [PHP](./examples/php.php)
- [Python](./examples/python.py)
