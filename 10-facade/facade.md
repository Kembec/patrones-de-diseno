# Patrón de Diseño Facade

Proporciona una interfaz simplificada a un conjunto complejo de interfaces en un subsistema.

- **Beneficios**:
  - Simplifica el uso de subsistemas complejos.
  - Reduce el acoplamiento entre el cliente y los subsistemas.
- **Cuándo usar**:
  - Cuando se necesita una interfaz simplificada para un subsistema complejo.
  - Para reducir la dependencia de los clientes en el subsistema.
- **Cuándo no usar**:
  - Cuando el subsistema ya es simple y fácil de usar.
  - Cuando una fachada añade una capa innecesaria de abstracción.

## Casos de Uso

**Caso de Uso 1: Simplificación de Sistemas Complejos**

- **Descripción**: Una aplicación necesita simplificar la interacción con un subsistema complejo de procesamiento de pagos. Utiliza una `PaymentFacade` que simplifica las operaciones de pago.
- **Detalle**: El patrón Facade permite simplificar la interacción con sistemas complejos proporcionando una interfaz más sencilla.

**Caso de Uso 2: Interacción con Múltiples APIs**

- **Descripción**: Una aplicación necesita interactuar con múltiples servicios de API para obtener datos del clima, tráfico y noticias. Utiliza una `APIFacade` que unifica estas interacciones.
- **Detalle**: El patrón Facade permite interactuar con múltiples APIs de manera unificada y simplificada.

**Caso de Uso 3: Control de Subsistemas en Juegos**

- **Descripción**: Un juego tiene múltiples subsistemas (Gráficos, Sonido, Física). Utiliza una `GameFacade` que simplifica la inicialización y control de estos subsistemas.
- **Detalle**: El patrón Facade permite controlar múltiples subsistemas de manera unificada y simplificada.

## Ejemplos

- [Javascript](./examples/javascript.js)
- [TypeScript](./examples/typescript.ts)
- [PHP](./examples/php.php)
- [Python](./examples/python.py)
