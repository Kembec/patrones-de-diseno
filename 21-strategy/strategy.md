# Patrón de Diseño Strategy

Define una familia de algoritmos, encapsula cada uno, y los hace intercambiables.

- **Beneficios**:
  - Promueve la reutilización de algoritmos.
  - Facilita el cambio de algoritmos sin modificar el código del cliente.
- **Cuándo usar**:
  - Cuando se tienen múltiples algoritmos para realizar una tarea específica.
  - Para permitir la selección dinámica de algoritmos en tiempo de ejecución.
- **Cuándo no usar**:
  - Cuando no hay necesidad de intercambiar algoritmos.
  - Cuando la complejidad del patrón no se justifica.

## Casos de Uso

**Caso de Uso 1: Algoritmos de Ordenación**

- **Descripción**: Una aplicación necesita utilizar diferentes algoritmos de ordenación (QuickSort, MergeSort, BubbleSort). Utiliza el patrón Strategy para seleccionar y ejecutar el algoritmo de ordenación.
- **Detalle**: El patrón Strategy permite cambiar algoritmos de manera flexible y extensible.

**Caso de Uso 2: Cálculo de Tarifas de Envío**

- **Descripción**: Una tienda en línea necesita calcular tarifas de envío usando diferentes estrategias (Envío Estándar, Envío Rápido, Envío Internacional). Utiliza el patrón Strategy para seleccionar y aplicar la estrategia de envío.
- **Detalle**: El patrón Strategy permite cambiar las estrategias de cálculo de tarifas de manera flexible y extensible.

**Caso de Uso 3: Formateo de Texto**

- **Descripción**: Una aplicación de procesamiento de texto necesita aplicar diferentes estrategias de formateo (Mayúsculas, Minúsculas, Capitalización de Palabras). Utiliza el patrón Strategy para seleccionar y aplicar la estrategia de formateo.
- **Detalle**: El patrón Strategy permite cambiar las estrategias de formateo de manera flexible y extensible.

## Ejemplos

- [Javascript](./examples/javascript.js)
- [TypeScript](./examples/typescript.ts)
- [PHP](./examples/php.php)
- [Python](./examples/python.py)
