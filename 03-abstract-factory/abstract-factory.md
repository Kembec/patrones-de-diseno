# Patrón de Diseño Abstract Factory

Proporciona una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas.

- **Beneficios**:
  - Asegura que los objetos creados son compatibles.
  - Promueve la consistencia entre objetos de una misma familia.
- **Cuándo usar**:
  - Cuando se necesita crear familias de objetos relacionados.
  - Para garantizar la interoperabilidad entre productos de la misma familia.
- **Cuándo no usar**:
  - Cuando no se necesitan múltiples familias de productos.
  - Cuando el sistema no requiere una configuración flexible de productos.

## Casos de Uso

**Caso de Uso 1: Familias de Productos Relacionados**

- **Descripción**: Una interfaz gráfica de usuario (GUI) necesita crear botones y checkboxes que tengan un estilo consistente (Windows, macOS, Linux). Una `GUIFactory` se utiliza para crear estos elementos.
- **Detalle**: El patrón Abstract Factory permite crear familias de productos relacionados (botones y checkboxes) de manera consistente.

**Caso de Uso 2: Sistemas de Bases de Datos**

- **Descripción**: Una aplicación necesita trabajar con diferentes bases de datos (SQL Server, MySQL, Oracle). Una `DatabaseFactory` se utiliza para crear objetos de conexión, comandos y adaptadores específicos para cada base de datos.
- **Detalle**: El patrón Abstract Factory permite trabajar con diferentes bases de datos de manera uniforme y modular.

**Caso de Uso 3: Juegos de Mesa**

- **Descripción**: Un juego de mesa digital tiene diferentes temas (Espacio, Medieval, Futuro). Cada tema tiene sus propias piezas y tableros. Una `GameFactory` se utiliza para crear las piezas y tableros correspondientes.
- **Detalle**: El patrón Abstract Factory permite crear diferentes familias de piezas y tableros según el tema seleccionado.

## Ejemplos

- [Javascript](./examples/javascript.js)
- [TypeScript](./examples/typescript.ts)
- [PHP](./examples/php.php)
- [Python](./examples/python.py)
