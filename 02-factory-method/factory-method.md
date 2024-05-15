# Patrón de Diseño Factory Method

Define una interfaz para crear un objeto, pero permite a las subclases decidir qué clase instanciar.

- **Beneficios**:
  - Desacopla la creación de objetos del código cliente.
  - Facilita la adición de nuevas clases de productos sin modificar el código existente.
- **Cuándo usar**:
  - Cuando las clases no pueden anticipar la clase de objetos que deben crear.
  - Para centralizar la lógica de creación de objetos.
- **Cuándo no usar**:
  - Cuando no hay variaciones significativas en la creación de objetos.
  - Cuando la complejidad adicional del patrón no se justifica.

## Casos de Uso

**Caso de Uso 1: Creación de Productos de Diferentes Tipos**

- **Descripción**: Una tienda en línea vende diferentes tipos de productos (Electrónicos, Ropa, Alimentos). La tienda utiliza una clase `ProductFactory` que decide qué tipo de producto crear basado en la entrada del usuario.
- **Detalle**: El patrón Factory Method permite crear diferentes tipos de productos sin cambiar el código del cliente.

**Caso de Uso 2: Generación de Documentos**

- **Descripción**: Una aplicación de procesamiento de documentos necesita generar diferentes tipos de documentos (PDF, Word, Excel). Una clase `DocumentFactory` se utiliza para crear el tipo de documento requerido.
- **Detalle**: El patrón Factory Method permite a la aplicación generar diferentes tipos de documentos sin cambiar la lógica de negocio.

**Caso de Uso 3: Conexiones de Red**

- **Descripción**: Una aplicación de red necesita conectarse a diferentes tipos de servidores (FTP, HTTP, SSH). Una clase `ConnectionFactory` decide qué tipo de conexión crear.
- **Detalle**: El patrón Factory Method permite manejar conexiones de red de diferentes tipos de manera flexible y extensible.

## Ejemplos

- [Javascript](./examples/javascript.js)
- [TypeScript](./examples/typescript.ts)
- [PHP](./examples/php.php)
- [Python](./examples/python.py)
