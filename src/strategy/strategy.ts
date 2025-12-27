/**
 * STRATEGY PATTERN
 *
 * Cuándo usar este patrón:
 * - Cuando tenés múltiples formas de realizar una misma acción
 *   (por ejemplo: pagos, cálculos, validaciones).
 * - Cuando querés evitar grandes bloques de if / else o switch.
 * - Cuando necesitás cambiar el comportamiento en tiempo de ejecución.
 *
 * Ejemplos reales:
 * - Métodos de pago (tarjeta, PayPal, transferencia)
 * - Algoritmos de descuento
 * - Estrategias de autenticación
 */

interface PaymentStrategy {
    pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} with Credit Card`);
    }
}

class PayPalPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} with PayPal`);
    }
}

class Checkout {
    constructor(private paymentStrategy: PaymentStrategy) { }

    process(amount: number): void {
        this.paymentStrategy.pay(amount);
    }
}

// Demotración

const checkout = new Checkout(new PayPalPayment());
checkout.process(100);