# Modelo de Datos 

## Por qué usar `interface` en lugar de `type`

### 1. **Extensibilidad y Herencia**

Las interfaces permiten la extensión mediante herencia, lo que facilita la evolución y ampliación del modelo de datos.

### 2. **Declaraciones de Fusión (Declaration Merging)**

Las interfaces pueden ser extendidas en diferentes archivos, útil para librerías o módulos.

### 3. **Semántica de Objeto**

Las interfaces representan contratos de objetos, mientras que `type` es más genérico para cualquier tipo de dato. Para modelos de datos que representan entidades del mundo real, las interfaces son más correctas.

### 4. **Mejor Soporte en Herramientas**

Los IDEs y herramientas de desarrollo suelen proporcionar mejor soporte para interfaces, con mejor autocompletado y análisis estático.


## Uso de Genéricos (`<T>`) para Tipado Seguro

Se ha hecho uso de genéricos tanto en RespuestaAPI<T> como ApiCliente.

**Beneficios de los Genéricos**

- **Reutilización de Código:** Una sola implementación sirve para múltiples tipos
- **Tipado en Tiempo de Compilación:** Errores detectados antes de la ejecución
- **Autocompletado Inteligente:** Mejor experiencia de desarrollo
- **Documentación Implícita:** El código se auto-documenta mediante tipos


## Simulación de Red con Promises y setTimeout

El `api-client` utiliza Promises para simular el comportamiento asíncrono real de las APIs mientras que setTimeout simula la latencia.

**Razones:**
- **Asincronía Real:** Las peticiones HTTP son asíncronas
- **Manejo de Errores:** Promises permiten un manejo de errores consistente
- **Composición:** Fácil encadenamiento de operaciones asíncronas

**Propósito de la Latencia:**
- **Experiencia de Usuario Realista:** Simula tiempos de carga reales
- **Pruebas de Estado de Carga:** Permite probar interfaces de carga
- **Manejo de Timeouts:** Prepara el código para situaciones de red lenta
- **Desarrollo Frontend:** Permite probar estados de carga y skeleton screens


## Aplicación de buenas prácticas

Este enfoque sigue buenas prácticas de desarrollo frontend:

- **Mock Data:** Permite desarrollo sin backend listo
- **Pruebas Unitarias:** Fácil de testear sin dependencias externas
- **Documentación:** Sirve como especificación viva de la API

## Conclusión

El modelo de datos implementado combina:

1. **Interfaces bien definidas** para representar entidades del dominio
2. **Genéricos estratégicos** para reutilización y tipado seguro
3. **Patrones asíncronos** que simulan el comportamiento real de redes
4. **Uniones discriminadas** para manejo de estados complejos



