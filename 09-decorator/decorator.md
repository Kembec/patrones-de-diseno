# Patrón de Diseño Decorator

Añade responsabilidades adicionales a un objeto de manera dinámica.

- **Beneficios**:
  - Ofrece una alternativa flexible a la herencia para extender funcionalidades.
  - Permite agregar comportamientos adicionales sin modificar el objeto original.
- **Cuándo usar**:
  - Cuando se necesita agregar responsabilidades a objetos de manera dinámica.
  - Para evitar la proliferación de subclases mediante la herencia.
- **Cuándo no usar**:
  - Cuando las responsabilidades adicionales no cambian en tiempo de ejecución.
  - Cuando el uso de decoradores complica innecesariamente el diseño.

## Casos de Uso

**Caso de Uso 1: Extensión de Funcionalidad de Objetos**

- **Descripción**: Una aplicación de mensajería necesita agregar diferentes funcionalidades a los mensajes (Encriptación, Compresión). Utiliza una clase `Message` que puede ser decorada con diferentes `MessageDecorator`.
- **Detalle**: El patrón Decorator permite agregar funcionalidades adicionales a los mensajes de manera dinámica.

**Caso de Uso 2: Adición de Comportamientos a Ventanas**

- **Descripción**: Una aplicación de GUI necesita agregar diferentes comportamientos a las ventanas (Bordes, Sombras). Utiliza una clase `Window` que puede ser decorada con diferentes `WindowDecorator`.
- **Detalle**: El patrón Decorator permite agregar comportamientos adicionales a las ventanas de manera dinámica.

**Caso de Uso 3: Mejora de Productos**

- **Descripción**: Una tienda en línea necesita agregar diferentes características a los productos (Empaque de regalo, Seguro). Utiliza una clase `Product` que puede ser decorada con diferentes `ProductDecorator`.
- **Detalle**: El patrón Decorator permite agregar características adicionales a los productos de manera dinámica.

## Ejemplos

- [Javascript](./examples/javascript.js)
- [TypeScript](./examples/typescript.ts)
- [PHP](./examples/php.php)
- [Python](./examples/python.py)
