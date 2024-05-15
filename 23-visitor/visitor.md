# Patrón de Diseño Visitor

Permite definir nuevas operaciones sin cambiar las clases de los elementos sobre los cuales opera.

- **Beneficios**:
  - Facilita la adición de nuevas operaciones sin modificar las clases de los elementos.
  - Promueve la separación de algoritmos y estructuras de datos.
- **Cuándo usar**:
  - Cuando se necesitan realizar operaciones complejas en una estructura de objetos.
  - Para añadir operaciones sin modificar las clases de los elementos.
- **Cuándo no usar**:
  - Cuando la estructura de objetos cambia frecuentemente.
  - Cuando la sobrecarga del patrón no se justifica.

## Casos de Uso

**Caso de Uso 1: Operaciones en un Árbol de Elementos**

- **Descripción**: Una aplicación de procesamiento de documentos necesita realizar diferentes operaciones en un árbol de elementos (Calcular tamaño, Buscar elementos, Generar resumen). Utiliza el patrón Visitor para definir las operaciones y aplicarlas a los elementos.
- **Detalle**: El patrón Visitor permite agregar operaciones a un árbol de elementos sin modificar las clases de los elementos.

**Caso de Uso 2: Operaciones en una Lista de Figuras Geométricas**

- **Descripción**: Una aplicación de dibujo necesita realizar diferentes operaciones en una lista de figuras geométricas (Calcular área, Dibujar, Cambiar color). Utiliza el patrón Visitor para definir las operaciones y aplicarlas a las figuras.
- **Detalle**: El patrón Visitor permite agregar operaciones a una lista de figuras geométricas sin modificar las clases de las figuras.

**Caso de Uso 3: Operaciones en una Jerarquía de Archivos**

- **Descripción**: Un sistema de archivos necesita realizar diferentes operaciones en una jerarquía de archivos (Calcular tamaño, Buscar archivos, Generar índice). Utiliza el patrón Visitor para definir las operaciones y aplicarlas a los archivos.
- **Detalle**: El patrón Visitor permite agregar operaciones a una jerarquía de archivos sin modificar las clases de los archivos.

## Ejemplos

- [Javascript](./examples/javascript.js)
- [TypeScript](./examples/typescript.ts)
- [PHP](./examples/php.php)
- [Python](./examples/python.py)
