# Patrones de Diseño

![Patrones de Diseño](./assets/header.svg)

## Patrones Creacionales

Estos patrones se enfocan en el proceso de creación de objetos, proporcionando mecanismos para crear objetos de manera que se adecuen a la situación dada. Ayudan a controlar la creación de instancias y simplifican el proceso de creación de objetos complejos.

1. [**Singleton**](./01-singleton/singleton.md): Garantiza que una clase solo tenga una instancia y proporciona un punto de acceso global a ella. [[Casos de uso](./01-singleton/singleton.md#casos-de-uso) | [Ejemplos](./01-singleton/singleton.md#ejemplos)]
2. [**Factory Method**](./02-factory-method/factory-method.md): Define una interfaz para crear un objeto, pero permite a las subclases decidir qué clase instanciar. [[Casos de uso](./02-factory-method/factory-method.md#casos-de-uso) | [Ejemplos](./02-factory-method/factory-method.md#ejemplos)]
3. [**Abstract Factory**](./03-abstract-factory/abstract-factory.md): Proporciona una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas. [[Casos de uso](./03-abstract-factory/abstract-factory.md#casos-de-uso) | [Ejemplos](./03-abstract-factory/abstract-factory.md#ejemplos)]
4. [**Builder**](./04-builder/builder.md): Separa la construcción de un objeto complejo de su representación, permitiendo construir diferentes tipos y representaciones. [[Casos de uso](./04-builder/builder.md#casos-de-uso) | [Ejemplos](./04-builder/builder.md#ejemplos)]
5. [**Prototype**](./05-prototype/prototype.md): Permite crear nuevos objetos clonando una instancia existente. [[Casos de uso](./05-prototype/prototype.md#casos-de-uso) | [Ejemplos](./05-prototype/prototype.md#ejemplos)]

## Patrones Estructurales

Estos patrones se centran en la composición de clases y objetos, ayudando a asegurar que cuando se combinen, las estructuras resultantes sean flexibles y eficientes. Facilitan el diseño de relaciones entre entidades para formar estructuras más grandes y manejables.

1. [**Adapter**](./06-adapter/adapter.md): Permite que interfaces incompatibles trabajen juntas, convirtiendo la interfaz de una clase en otra esperada por los clientes. [[Casos de uso](./06-adapter/adapter.md#casos-de-uso) | [Ejemplos](./06-adapter/adapter.md#ejemplos)]
2. [**Bridge**](./07-bridge/bridge.md): Desacopla una abstracción de su implementación, permitiendo que ambas varíen independientemente. [[Casos de uso](./07-bridge/bridge.md#casos-de-uso) | [Ejemplos](./07-bridge/bridge.md#ejemplos)]
3. [**Composite**](./08-composite/composite.md): Permite tratar objetos individuales y composiciones de objetos de manera uniforme. [[Casos de uso](./08-composite/composite.md#casos-de-uso) | [Ejemplos](./08-composite/composite.md#ejemplos)]
4. [**Decorator**](./09-decorator/decorator.md): Añade responsabilidades adicionales a un objeto de manera dinámica. [[Casos de uso](./09-decorator/decorator.md#casos-de-uso) | [Ejemplos](./09-decorator/decorator.md#ejemplos)]
5. [**Facade**](./10-facade/facade.md): Proporciona una interfaz simplificada a un conjunto complejo de interfaces en un subsistema. [[Casos de uso](./10-facade/facade.md#casos-de-uso) | [Ejemplos](./10-facade/facade.md#ejemplos)]
6. [**Flyweight**](./11-flyweight/flyweight.md): Reduce la cantidad de objetos creados para disminuir el uso de memoria y mejorar el rendimiento. [[Casos de uso](./11-flyweight/flyweight.md#casos-de-uso) | [Ejemplos](./11-flyweight/flyweight.md#ejemplos)]
7. [**Proxy**](./12-proxy/proxy.md): Proporciona un sustituto o marcador de posición para otro objeto para controlar el acceso a él. [[Casos de uso](./12-proxy/proxy.md#casos-de-uso) | [Ejemplos](./12-proxy/proxy.md#ejemplos)]

## Patrones de Comportamiento

Estos patrones se enfocan en la comunicación entre objetos y la asignación de responsabilidades. Mejoran la flexibilidad en la comunicación y la asignación de tareas entre objetos, definiendo cómo interactúan y cómo se distribuyen las responsabilidades.

1. [**Chain of Responsibility**](./13-chain-of-responsibility/chain-of-responsibility.md): Permite pasar solicitudes a lo largo de una cadena de manejadores, donde cada manejador decide si procesar la solicitud o pasarla al siguiente manejador. [[Casos de uso](./13-chain-of-responsibility/chain-of-responsibility.md#casos-de-uso) | [Ejemplos](./13-chain-of-responsibility/chain-of-responsibility.md#ejemplos)]
2. [**Command**](./14-command/command.md): Encapsula una solicitud como un objeto, permitiendo parametrizar a los clientes con diferentes solicitudes, colas o registros de solicitudes. [[Casos de uso](./14-command/command.md#casos-de-uso) | [Ejemplos](./14-command/command.md#ejemplos)]
3. [**Interpreter**](./15-interpreter/interpreter.md): Define una representación para la gramática de un lenguaje y un intérprete que usa esa representación para interpretar frases del lenguaje. [[Casos de uso](./15-interpreter/interpreter.md#casos-de-uso) | [Ejemplos](./15-interpreter/interpreter.md#ejemplos)]
4. [**Iterator**](./16-iterator/iterator.md): Proporciona una forma de acceder secuencialmente a los elementos de un objeto agregado sin exponer su representación subyacente. [[Casos de uso](./16-iterator/iterator.md#casos-de-uso) | [Ejemplos](./16-iterator/iterator.md#ejemplos)]
5. [**Mediator**](./17-mediator/mediator.md): Define un objeto que encapsula cómo interactúan un conjunto de objetos, promoviendo el acoplamiento débil entre ellos. [[Casos de uso](./17-mediator/mediator.md#casos-de-uso) | [Ejemplos](./17-mediator/mediator.md#ejemplos)]
6. [**Memento**](./18-memento/memento.md): Permite capturar y externalizar el estado interno de un objeto sin violar la encapsulación, para que el objeto pueda ser restaurado a este estado más tarde. [[Casos de uso](./18-memento/memento.md#casos-de-uso) | [Ejemplos](./18-memento/memento.md#ejemplos)]
7. [**Observer**](./19-observer/observer.md): Define una dependencia de uno a muchos entre objetos, de modo que cuando uno cambia de estado, todos sus dependientes son notificados y actualizados automáticamente. [[Casos de uso](./19-observer/observer.md#casos-de-uso) | [Ejemplos](./19-observer/observer.md#ejemplos)]
8. [**State**](./20-state/state.md): Permite a un objeto alterar su comportamiento cuando cambia su estado interno. [[Casos de uso](./20-state/state.md#casos-de-uso) | [Ejemplos](./20-state/state.md#ejemplos)]
9. [**Strategy**](./21-strategy/strategy.md): Define una familia de algoritmos, encapsula cada uno, y los hace intercambiables. [[Casos de uso](./21-strategy/strategy.md#casos-de-uso) | [Ejemplos](./21-strategy/strategy.md#ejemplos)]
10. [**Template Method**](./22-template-method/template-method.md): Define el esqueleto de un algoritmo en una operación, diferiendo algunos pasos a las subclases. [[Casos de uso](./22-template-method/template-method.md#casos-de-uso) | [Ejemplos](./22-template-method/template-method.md#ejemplos)]
11. [**Visitor**](./23-visitor/visitor.md): Permite definir nuevas operaciones sin cambiar las clases de los elementos sobre los cuales opera. [[Casos de uso](./23-visitor/visitor.md#casos-de-uso) | [Ejemplos](./23-visitor/visitor.md#ejemplos)]

---

[![Buy Me A Coffee](https://img.shields.io/badge/Buy_Me_A_Coffee-apoyame-ffdd2a?style=for-the-badge&logo=buy-me-a-coffee&logoColor=white&labelColor=18181b)](https://buymeacoffee.com/kembec)
