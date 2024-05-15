# Patrón de Diseño Chain of Responsibility

Permite pasar solicitudes a lo largo de una cadena de manejadores, donde cada manejador decide si procesar la solicitud o pasarla al siguiente manejador.

- **Beneficios**:
  - Desacopla el emisor de la solicitud de su receptor.
  - Facilita la adición o modificación de manejadores sin cambiar el código del cliente.
- **Cuándo usar**:
  - Cuando se tiene una lista de objetos que pueden manejar una solicitud de manera secuencial.
  - Para permitir que varios objetos tengan la oportunidad de manejar una solicitud.
- **Cuándo no usar**:
  - Cuando se necesita una respuesta inmediata y directa a una solicitud.
  - Cuando el procesamiento secuencial no añade valor.

## Casos de Uso

**Caso de Uso 1: Manejo de Solicitudes de Soporte**

- **Descripción**: Un sistema de soporte técnico maneja diferentes tipos de solicitudes (Nivel 1, Nivel 2, Nivel 3). Utiliza una cadena de manejadores (`SupportHandler`) para procesar las solicitudes.
- **Detalle**: El patrón Chain of Responsibility permite manejar solicitudes de manera flexible y extensible, pasando por diferentes niveles de soporte.

**Caso de Uso 2: Procesamiento de Eventos**

- **Descripción**: Una aplicación GUI necesita manejar diferentes eventos (Click, Tecla, Movimiento). Utiliza una cadena de manejadores (`EventHandler`) para procesar los eventos.
- **Detalle**: El patrón Chain of Responsibility permite procesar eventos de manera flexible y extensible, pasando por diferentes manejadores.

**Caso de Uso 3: Validación de Datos**

- **Descripción**: Un formulario web necesita validar diferentes campos de entrada (Correo, Teléfono, Dirección). Utiliza una cadena de validadores (`Validator`) para procesar las validaciones.
- **Detalle**: El patrón Chain of Responsibility permite validar datos de manera flexible y extensible, pasando por diferentes validadores.

## Ejemplos

- [Javascript](./examples/javascript.js)
- [TypeScript](./examples/typescript.ts)
- [PHP](./examples/php.php)
- [Python](./examples/python.py)
