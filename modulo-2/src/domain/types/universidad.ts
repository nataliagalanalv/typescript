interface Estudiante {
    readonly id: number;
    nombreCompleto: string;
    email: string;
    fechaNacimiento: Date;
}

interface Profesor {
    readonly id: number;
    nombreCompleto: string; 
    asignatura: string;
}

interface Asignatura {
    readonly id: number;
    nombre: string;
    creditos: number;
}

type EstadoMatricula = 'MatriculaActiva' | 'MatriculaSuspendida' | 'MatriculaFinalizada';

interface MatriculaActiva {
    tipo: "ACTIVA";
    asignaturas: Asignatura[];
}

interface MatriculaSuspendida {
    tipo: "SUSPENDIDA";
    motivo: string;
}
interface MatriculaFinalizada {
    tipo: "FINALIZADA";
    notaMedia: number;
}

function generarReporte(estado: EstadoMatricula) : string {
    switch (estado.tipo) {
        case "ACTIVA":
            return `Matrícula activa con ${estado.asignaturas.length} asignaturas.`;
        case "SUSPENDIDA":
            return `Matrícula suspendida por: ${estado.motivo}`;
        case "FINALIZADA":
            return `Matrícula finalizada con nota media: ${estado.notaMedia}`;
    default:
        const _exhaustiveCheck: never = estado;
        return _exhaustiveCheck;

        }
    }



export { Estudiante, Profesor, Asignatura, EstadoMatricula, MatriculaActiva, MatriculaSuspendida, MatriculaFinalizada, generarReporte };