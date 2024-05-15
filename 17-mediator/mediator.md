# Patrón de Diseño Mediator

Define un objeto que encapsula cómo interactúan un conjunto de objetos, promoviendo el acoplamiento débil entre ellos.

- **Beneficios**:
  - Reduce las dependencias directas entre objetos, promoviendo el bajo acoplamiento.
  - Facilita la comunicación y coordinación entre objetos sin conocer sus detalles.
- **Cuándo usar**:
  - Cuando múltiples objetos interactúan de manera compleja y directa.
  - Para centralizar la lógica de comunicación entre objetos.
- **Cuándo no usar**:
  - Cuando la interacción entre objetos es simple y directa.
  - Cuando el uso de un mediador añade complejidad innecesaria.

## Casos de Uso

**Caso de Uso 1: Comunicación entre Componentes GUI**

- **Descripción**: Una aplicación GUI necesita manejar la comunicación entre diferentes componentes (Botones, Campos de Texto, Listas). Utiliza un `GUIState` para manejar la comunicación.
- **Detalle**: El patrón Mediator permite manejar la comunicación entre componentes de manera centralizada y desacoplada.

**Caso de Uso 2: Gestión de Chat**

- **Descripción**: Una aplicación de chat necesita manejar la comunicación entre diferentes usuarios. Utiliza un `ChatMediator` para gestionar la comunicación.
- **Detalle**: El patrón Mediator permite gestionar la comunicación entre usuarios de manera centralizada y desacoplada.

**Caso de Uso 3: Coordinación de Tareas en un Sistema de Automatización**

- **Descripción**: Un sistema de automatización necesita coordinar la ejecución de diferentes tareas. Utiliza un `TaskMediator` para coordinar las tareas.
- **Detalle**: El patrón Mediator permite coordinar tareas de manera centralizada y desacoplada.

## Ejemplos

- [Javascript](./examples/javascript.js)
- [TypeScript](./examples/typescript.ts)
- [PHP](./examples/php.php)
- [Python](./examples/python.py)
