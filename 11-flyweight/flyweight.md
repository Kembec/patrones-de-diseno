# Patrón de Diseño Flyweight

Reduce la cantidad de objetos creados compartiendo objetos existentes en lugar de crear nuevos.

- **Beneficios**:
  - Reduce el uso de memoria y mejora el rendimiento.
  - Facilita la gestión de grandes cantidades de objetos.
- **Cuándo usar**:
  - Cuando una aplicación usa una gran cantidad de objetos similares.
  - Para optimizar el uso de recursos en sistemas con restricciones de memoria.
- **Cuándo no usar**:
  - Cuando los objetos no son suficientemente similares para compartir.
  - Cuando la optimización de memoria no es una preocupación.

## Casos de Uso

**Caso de Uso 1: Gestión de Carácteres en un Editor de Texto**

- **Descripción**: Un editor de texto necesita manejar miles de caracteres. Utiliza un `CharacterFlyweight` para compartir el estado común de los caracteres.
- **Detalle**: El patrón Flyweight permite gestionar eficientemente un gran número de objetos compartiendo su estado común.

**Caso de Uso 2: Renderizado de Gráficos**

- **Descripción**: Un juego necesita renderizar miles de árboles en un bosque. Utiliza un `TreeFlyweight` para compartir el estado común de los árboles.
- **Detalle**: El patrón Flyweight permite renderizar eficientemente un gran número de objetos gráficos compartiendo su estado común.

**Caso de Uso 3: Sistema de Ventanas**

- **Descripción**: Un sistema operativo necesita manejar múltiples ventanas con estados similares. Utiliza un `WindowFlyweight` para compartir el estado común de las ventanas.
- **Detalle**: El patrón Flyweight permite manejar eficientemente un gran número de ventanas compartiendo su estado común.

## Ejemplos

- [Javascript](./examples/javascript.js)
- [TypeScript](./examples/typescript.ts)
- [PHP](./examples/php.php)
- [Python](./examples/python.py)
