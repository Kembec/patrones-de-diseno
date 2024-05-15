# Patrón de Diseño Adapter

Permite que interfaces incompatibles trabajen juntas, convirtiendo la interfaz de una clase en otra esperada por los clientes.

- **Beneficios**:
  - Facilita la integración de clases existentes con nuevas interfaces.
  - Promueve la reutilización de código.
- **Cuándo usar**:
  - Cuando se necesita utilizar una clase existente pero su interfaz no es compatible.
  - Para conectar sistemas antiguos con nuevos componentes.
- **Cuándo no usar**:
  - Cuando ambas interfaces ya son compatibles.
  - Cuando la adaptación es innecesariamente compleja.

## Casos de Uso

**Caso de Uso 1: Integración de Sistemas Legados**

- **Descripción**: Una nueva aplicación necesita integrarse con un sistema legado que tiene una interfaz incompatible. Utiliza un `LegacyAdapter` para adaptar la nueva interfaz a la antigua.
- **Detalle**: El patrón Adapter permite integrar sistemas nuevos con sistemas legados sin modificar el código legado.

**Caso de Uso 2: Conexión de Diferentes APIs**

- **Descripción**: Una aplicación necesita conectarse a diferentes servicios de API que tienen diferentes interfaces. Utiliza un `APIAdapter` para uniformar las interfaces.
- **Detalle**: El patrón Adapter permite conectar diferentes APIs de manera uniforme y consistente.

**Caso de Uso 3: Compatibilidad con Diferentes Bibliotecas**

- **Descripción**: Una aplicación necesita usar diferentes bibliotecas de terceros que tienen interfaces incompatibles. Utiliza un `LibraryAdapter` para unificar las interfaces.
- **Detalle**: El patrón Adapter permite usar diferentes bibliotecas de terceros sin modificar su código.

## Ejemplos

- [Javascript](./examples/javascript.js)
- [TypeScript](./examples/typescript.ts)
- [PHP](./examples/php.php)
- [Python](./examples/python.py)
