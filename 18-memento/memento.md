# Patrón de Diseño Memento

Permite capturar y externalizar el estado interno de un objeto sin violar la encapsulación, para que el objeto pueda ser restaurado a este estado más tarde.

- **Beneficios**:
  - Permite restaurar el estado anterior de un objeto.
  - Promueve la encapsulación del estado interno.
- **Cuándo usar**:
  - Cuando se necesita implementar operaciones de deshacer.
  - Para capturar y restaurar estados complejos de objetos.
- **Cuándo no usar**:
  - Cuando la restauración de estados no es necesaria.
  - Cuando la captura del estado interno es compleja o costosa.

## Casos de Uso

**Caso de Uso 1: Guardado y Restauración de Estados de Juego**

- **Descripción**: Un juego necesita permitir a los jugadores guardar y restaurar su progreso. Utiliza un `GameState` para capturar y restaurar el estado del juego.
- **Detalle**: El patrón Memento permite guardar y restaurar estados de juego de manera eficiente y sin exponer los detalles internos.

**Caso de Uso 2: Deshacer Cambios en un Editor de Texto**

- **Descripción**: Un editor de texto necesita permitir a los usuarios deshacer y rehacer cambios. Utiliza un `TextEditorState` para capturar y restaurar el estado del documento.
- **Detalle**: El patrón Memento permite deshacer y rehacer cambios de manera eficiente y sin exponer los detalles internos.

**Caso de Uso 3: Configuración de Aplicaciones**

- **Descripción**: Una aplicación necesita permitir a los usuarios guardar y restaurar configuraciones personalizadas. Utiliza un `SettingsMemento` para capturar y restaurar la configuración.
- **Detalle**: El patrón Memento permite guardar y restaurar configuraciones de manera eficiente y sin exponer los detalles internos.

## Ejemplos

- [Javascript](./examples/javascript.js)
- [TypeScript](./examples/typescript.ts)
- [PHP](./examples/php.php)
- [Python](./examples/python.py)
