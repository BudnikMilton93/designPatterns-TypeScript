/**
 * FACTORY PATTERN
 *
 * Cuándo usar este patrón:
 * - Cuando la creación de objetos es compleja o depende de una condición.
 * - Cuando querés centralizar la lógica de creación.
 * - Cuando no querés que el consumidor conozca la clase concreta.
 *
 * Ejemplos reales:
 * - Creación de notificaciones (email, sms, push)
 * - Creación de servicios según entorno
 * - Parsers o readers según formato
 */

interface Notificacion {
    send(message: string): void;
}

class EmailNotification implements Notificacion {
    send(message: string): void {
        console.log(`Email sent: ${message}`);
    }
}

class SMSNotification implements Notificacion {
    send(message: string): void {
        console.log(`SMS sent: ${message}`);
    }
}

class NotificationFactory {
    static create(type: 'email' | 'sms'): Notificacion {
        switch (type) {
            case 'email':
                return new EmailNotification();
            case 'sms':
                return new SMSNotification();
            default:
               throw new Error('Notification type not supported');
        }
    }
}

//Demostración

const notificacion = NotificationFactory.create("sms");
notificacion.send("Hola desde la fabrica");