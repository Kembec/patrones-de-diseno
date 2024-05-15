# Patrón de Diseño Composite

Permite tratar objetos individuales y composiciones de objetos de manera uniforme.

- **Beneficios**:
  - Facilita la manipulación de estructuras jerárquicas.
  - Promueve la uniformidad en el tratamiento de objetos simples y compuestos.
- **Cuándo usar**:
  - Cuando se necesita representar estructuras jerárquicas de objetos.
  - Para facilitar la manipulación uniforme de objetos simples y compuestos.
- **Cuándo no usar**:
  - Cuando la estructura jerárquica no es necesaria.
- Cuando el uso de composites añade complejidad sin beneficios claros.

## Casos de Uso

**Caso de Uso 1: Gestión de Archivos y Directorios**

- **Descripción**: Un sistema de archivos necesita manejar archivos y directorios de manera uniforme. Utiliza una clase `FileSystem` que puede ser un archivo o un directorio.
- **Detalle**: El patrón Composite permite tratar archivos y directorios de manera uniforme.

**Caso de Uso 2: Menús de Aplicación**

- **Descripción**: Una aplicación de escritorio necesita manejar menús y submenús de manera uniforme. Utiliza una clase `MenuComponent` que puede ser un ítem de menú o un submenú.
- **Detalle**: El patrón Composite permite manejar menús y submenús de manera uniforme.

**Caso de Uso 3: Diagramas de Componentes**

- **Descripción**: Una herramienta de diseño de software necesita manejar diagramas de componentes que tienen subcomponentes. Utiliza una clase `Component` que puede ser un componente simple o compuesto.
- **Detalle**: El patrón Composite permite manejar componentes y subcomponentes de manera uniforme.

## Ejemplos

- [Javascript](./examples/javascript.js)
- [TypeScript](./examples/typescript.ts)
- [PHP](./examples/php.php)
- [Python](./examples/python.py)
