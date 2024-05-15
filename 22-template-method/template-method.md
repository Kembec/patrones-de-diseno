# Patrón de Diseño Template Method

Define el esqueleto de un algoritmo en una operación, diferiendo algunos pasos a las subclases.

- **Beneficios**:
  - Promueve la reutilización del código base común.
  - Facilita la personalización del comportamiento en subclases.
- **Cuándo usar**:
  - Cuando se tienen algoritmos que comparten una estructura común.
  - Para permitir la personalización de pasos específicos en subclases.
- **Cuándo no usar**:
  - Cuando los algoritmos no comparten estructura común.
  - Cuando la personalización en subclases no es necesaria.

## Casos de Uso

**Caso de Uso 1: Proceso de Preparación de Bebidas**

- **Descripción**: Una máquina de bebidas prepara diferentes tipos de bebidas (Té, Café). Utiliza el patrón Template Method para definir el proceso de preparación y permite a las subclases implementar los pasos específicos.
- **Detalle**: El patrón Template Method permite definir un proceso general y permitir a las subclases implementar los detalles específicos.

**Caso de Uso 2: Generación de Informes**

- **Descripción**: Una aplicación de análisis de datos genera diferentes tipos de informes (Resumen, Detallado, Gráfico). Utiliza el patrón Template Method para definir el proceso de generación de informes y permite a las subclases implementar los pasos específicos.
- **Detalle**: El patrón Template Method permite definir un proceso general y permitir a las subclases implementar los detalles específicos.

**Caso de Uso 3: Validación de Formularios**

- **Descripción**: Una aplicación web valida diferentes tipos de formularios (Registro, Contacto, Comentarios). Utiliza el patrón Template Method para definir el proceso de validación y permite a las subclases implementar los pasos específicos.
- **Detalle**: El patrón Template Method permite definir un proceso general y permitir a las subclases implementar los detalles específicos.

## Ejemplos

- [Javascript](./examples/javascript.js)
- [TypeScript](./examples/typescript.ts)
- [PHP](./examples/php.php)
- [Python](./examples/python.py)
