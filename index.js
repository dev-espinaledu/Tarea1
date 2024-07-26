// Creación de la clase Prestamo
class Prestamo {
    // Atributos: se inicializan con el constructor
    constructor(numDoc, nombre, valorPrestamo, valorPrestamoIntereses, fecha, valorIntereses, numeroCuotas) {
        // Asignación de los parámetros recibidos a los atributos del objeto
        this.numDoc = numDoc;
        this.nombre = nombre;
        this.valorPrestamo = valorPrestamo;
        this.valorPrestamoIntereses = valorPrestamoIntereses;
        this.fecha = fecha;
        this.valorIntereses = valorIntereses;
        this.numeroCuotas = numeroCuotas;
    }
    // Métodos: funciones que realizan operaciones usando los atributos de la clase

    // Calcula el valor total del préstamo incluyendo intereses y lo asigna al atributo valorPrestamoIntereses
    calcularValorTotalPrestamo() {
        this.valorPrestamoIntereses = this.valorPrestamo * this.valorIntereses * this.numeroCuotas + this.valorPrestamo;
    }
    // Calcula el valor a pagar cada mes incluyendo intereses y lo muestra en la consola
    valorPagarCuotasInteres() {
        console.log(this.valorPrestamo * this.valorIntereses * this.numeroCuotas);
    }
    // Calcula el valor a pagar cada mes sin intereses y lo muestra en la consola
    valorPagarCuotas() {
        console.log(this.valorPrestamo / this.numeroCuotas);
    }
    // Permite pagar una cuota del préstamo y actualiza el valor del préstamo con intereses
    pagarCuota(valorPagar) {
        if (this.valorPrestamoIntereses >= valorPagar) {
            this.valorPrestamoIntereses -= valorPagar; // Restamos el valor pagado del total
            console.log('Has pagado tu deuda');
        } else {
            console.log('No puedes pagar tu deuda');
        }
    }
    // Permite refinanciar el préstamo cambiando el número de cuotas
    refinanciar(nuevoCuotas) {
        this.numeroCuotas = nuevoCuotas; // Actualizamos el número de cuotas
        this.calcularValorTotalPrestamo(); // Recalculamos el valor total del préstamo con el nuevo número de cuotas
        console.log(`El nuevo número de cuotas es: ${this.numeroCuotas}`);
    }
    // Muestra la información del préstamo en la consola
    toString() {
        console.log(`${this.nombre} identificado con cédula de ciudadanía ${this.numDoc}, realizó el ${this.fecha} un préstamo por un valor de ${this.valorPrestamo}, con interés del ${this.valorIntereses} a ${this.numeroCuotas} cuotas con un total de ${this.valorPrestamoIntereses}`);
    }
}

// Instancias
// Creación de un objeto a partir de la clase Prestamo
let prestamo = new Prestamo(100234875, 'María', 200000, 0, '05-02-2024', 0.1, 6);
// Se ejecutan los métodos definidos en la clase
prestamo.calcularValorTotalPrestamo();
console.log(prestamo);
prestamo.valorPagarCuotasInteres();
prestamo.valorPagarCuotas();
prestamo.toString();
// Se ejecuta el método pagarCuota y se pasa un valor de pago
prestamo.pagarCuota(150000);
console.log(prestamo.valorPrestamoIntereses);
// Se ejecuta el método refinanciar y se pasa el nuevo número de cuotas
prestamo.refinanciar(2);
