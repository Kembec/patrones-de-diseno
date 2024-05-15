# Patrón de Diseño Prototype

Permite crear nuevos objetos clonando una instancia existente.

- **Beneficios**:
  - Permite la creación rápida de nuevos objetos sin depender de sus constructores.
  - Puede mejorar el rendimiento cuando la creación de un objeto es costosa.
- **Cuándo usar**:
  - Cuando la creación de un nuevo objeto es costosa o compleja.
  - Para evitar subclases de una clase "constructor".
- **Cuándo no usar**:
  - Cuando los objetos a clonar no son costosos de crear.
  - Cuando la clonación no es trivial o implica una lógica complicada.

## Casos de Uso

**Caso de Uso 1: Duplicación de Objetos Complejos**

- **Descripción**: Una aplicación de diseño gráfico permite duplicar objetos complejos (Formas, Imágenes, Textos). Utiliza un `GraphicPrototype` para clonar estos objetos.
- **Detalle**: El patrón Prototype permite duplicar objetos complejos de manera eficiente y sin depender de su clase concreta.

**Caso de Uso 2: Inicialización Rápida de Juegos**

- **Descripción**: Un juego necesita crear múltiples instancias de enemigos con las mismas características iniciales. Utiliza un `EnemyPrototype` para clonar enemigos.
- **Detalle**: El patrón Prototype permite crear múltiples instancias de enemigos de manera rápida y eficiente.

**Caso de Uso 3: Copia de Configuraciones de Usuario**

- **Descripción**: Una aplicación permite a los usuarios copiar sus configuraciones y preferencias a nuevas cuentas. Utiliza un `UserSettingsPrototype` para clonar las configuraciones.
- **Detalle**: El patrón Prototype permite copiar configuraciones de usuario de manera eficiente y consistente.

## Ejemplos

- [Javascript](./examples/javascript.js)
- [TypeScript](./examples/typescript.ts)
- [PHP](./examples/php.php)
- [Python](./examples/python.py)
