/**
 * DECORATOR PATTERN
 *
 * Cuándo usar este patrón:
 * - Cuando necesitás agregar comportamiento a un objeto sin modificar su código.
 * - Cuando tenés funcionalidades transversales (logging, caching, métricas).
 * - Cuando querés evitar herencia excesiva.
 *
 * Ejemplos reales:
 * - Logging
 * - Caching
 * - Autorización
 * - Métricas
 */

interface Service {
    execute(): void;
}

class BaseService implements Service {
    execute(): void {
        console.log('Executing base service logic');
    }
}

// Decorator
class LogginDecorator implements Service {
    constructor(private service: Service) {

    }

    execute(): void {
        console.log('Before execution');
        this.service.execute();
        console.log('After execution');
    }
}

//Demostración

const servicio = new LogginDecorator(new BaseService());
servicio.execute();