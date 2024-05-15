# Patrón de Diseño Builder

Separa la construcción de un objeto complejo de su representación, permitiendo construir diferentes tipos y representaciones.

- **Beneficios**:
  - Facilita la creación de objetos complejos paso a paso.
  - Permite la reutilización del código de construcción.
- **Cuándo usar**:
  - Cuando se necesita crear objetos complejos con muchas configuraciones posibles.
  - Para mejorar la legibilidad del código de creación de objetos.
- **Cuándo no usar**:
  - Para la creación de objetos simples que no requieren pasos complejos.
  - Cuando el patrón agrega una complejidad innecesaria.

## Casos de Uso

**Caso de Uso 1: Construcción de Vehículos**

- **Descripción**: Una fábrica de automóviles necesita construir diferentes tipos de vehículos (Coche, Moto, Camión). Utiliza un `VehicleBuilder` para construir vehículos de manera modular.
- **Detalle**: El patrón Builder permite construir vehículos de diferentes tipos de manera flexible y modular.

**Caso de Uso 2: Generación de Informes Complejos**

- **Descripción**: Una aplicación de análisis de datos genera informes complejos con múltiples secciones (Gráficos, Tablas, Resúmenes). Utiliza un `ReportBuilder` para construir informes de manera modular.
- **Detalle**: El patrón Builder permite generar informes complejos de manera estructurada y flexible.

**Caso de Uso 3: Configuración de Computadoras Personalizadas**

- **Descripción**: Un sitio web permite a los usuarios configurar y ordenar computadoras personalizadas (CPU, RAM, Almacenamiento, GPU). Utiliza un `ComputerBuilder` para construir la configuración personalizada.
- **Detalle**: El patrón Builder permite construir configuraciones personalizadas de computadoras de manera flexible y extensible.

## Ejemplos

- [Javascript](./examples/javascript.js)
- [TypeScript](./examples/typescript.ts)
- [PHP](./examples/php.php)
- [Python](./examples/python.py)
