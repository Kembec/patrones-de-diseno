# Patrón de Diseño Iterator

Proporciona una forma de acceder secuencialmente a los elementos de un objeto agregado sin exponer su representación subyacente.

- **Beneficios**:
  - Facilita la iteración sobre colecciones de manera uniforme.
  - Promueve el encapsulamiento de la estructura interna de las colecciones.
- **Cuándo usar**:
  - Cuando se necesita recorrer una colección de objetos sin exponer su representación interna.
  - Para proporcionar diferentes formas de iteración sobre una colección.
- **Cuándo no usar**:
  - Cuando la colección es simple y no requiere un iterador.
  - Cuando la sobrecarga del patrón no se justifica.

## Casos de Uso

**Caso de Uso 1: Recorrido de Colecciones**

- **Descripción**: Una biblioteca necesita recorrer colecciones de libros para encontrar un libro específico. Utiliza un `BookIterator` para recorrer la colección.
- **Detalle**: El patrón Iterator permite recorrer colecciones de manera uniforme y extensible.

**Caso de Uso 2: Procesamiento de Resultados de Búsqueda**

- **Descripción**: Un motor de búsqueda necesita procesar y mostrar resultados de búsqueda. Utiliza un `SearchResultIterator` para recorrer los resultados.
- **Detalle**: El patrón Iterator permite procesar resultados de búsqueda de manera uniforme y extensible.

**Caso de Uso 3: Gestión de Productos en un Carrito de Compras**

- **Descripción**: Una tienda en línea necesita gestionar los productos en el carrito de compras. Utiliza un `CartIterator` para recorrer los productos en el carrito.
- **Detalle**: El patrón Iterator permite gestionar los productos en un carrito de compras de manera uniforme y extensible.

## Ejemplos

- [Javascript](./examples/javascript.js)
- [TypeScript](./examples/typescript.ts)
- [PHP](./examples/php.php)
- [Python](./examples/python.py)
