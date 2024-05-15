# Patrón de Diseño Bridge

Desacopla una abstracción de su implementación, permitiendo que ambas varíen independientemente.

- **Beneficios**:
  - Incrementa la extensibilidad al permitir que las abstracciones y las implementaciones evolucionen por separado.
  - Reduce el acoplamiento entre la abstracción y su implementación.
- **Cuándo usar**:
  - Cuando se requiere una mayor flexibilidad en la relación entre una abstracción y su implementación.
  - Para evitar una explosión combinatoria de clases derivadas.
- **Cuándo no usar**:
  - Cuando la relación entre la abstracción y la implementación es estable y no cambia.
  - Cuando la complejidad añadida no se justifica.

## Casos de Uso

**Caso de Uso 1: Implementación de Dispositivos**

- **Descripción**: Una aplicación de control remoto necesita manejar diferentes dispositivos (TV, Radio, Luz). Utiliza una clase `Device` que se conecta a diferentes `RemoteControl`.
- **Detalle**: El patrón Bridge permite desacoplar la abstracción (RemoteControl) de su implementación (Device).

**Caso de Uso 2: Soporte de Múltiples Plataformas**

- **Descripción**: Una aplicación gráfica necesita soportar múltiples plataformas (Windows, macOS, Linux). Utiliza una clase `Platform` que se conecta a diferentes `GraphicRenderer`.
- **Detalle**: El patrón Bridge permite soportar múltiples plataformas de manera uniforme y extensible.

**Caso de Uso 3: Formatos de Documentos**

- **Descripción**: Una aplicación de edición de documentos necesita soportar diferentes formatos de documentos (PDF, Word, HTML). Utiliza una clase `Document` que se conecta a diferentes `Formatter`.
- **Detalle**: El patrón Bridge permite manejar diferentes formatos de documentos de manera flexible y modular.

## Ejemplos

- [Javascript](./examples/javascript.js)
- [TypeScript](./examples/typescript.ts)
- [PHP](./examples/php.php)
- [Python](./examples/python.py)
