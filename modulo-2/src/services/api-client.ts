import { RespuestaAPI } from "../domain/types/api-types";

const MOCK_DB: Record<string, unknown> = {
    '/tasks': [
        { id: 1, title: 'Aprender TypeScript', completed: false },
        { id: 2, title: 'Configurar Vercel',   completed: true  },
    ],
    '/user': { id: 101, name: 'Natalia', role: 'Developer' },
};

function respuestaOk<T>(data: T, statusCode = 200): RespuestaAPI<T> {
    return {
        success: true,
        data,
        statusCode,
        message: 'Recurso obtenido con éxito.',
        timestamp: new Date().toISOString(),
    };
}

function respuestaError<T>(message: string, statusCode = 500): RespuestaAPI<T> {
    return {
        success: false,
        data: null,
        statusCode,
        message,
        timestamp: new Date().toISOString(),
    };
}

class ApiClient {
    /**
     * Simula una petición GET a la base de datos.
     * @param endpoint Ruta del recurso 
     * @returns Promesa tipada con RespuestaAPI<T>
     */
    async obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {

        if (!endpoint?.trim()) {
            return respuestaError<T>('El endpoint no puede estar vacío.', 400);
        }

        console.log(`Iniciando petición a: ${endpoint}...`);

        return new Promise<RespuestaAPI<T>>((resolve) => {
            setTimeout(() => {
                const recurso = MOCK_DB[endpoint];

                if (recurso === undefined) {
                    resolve(respuestaError<T>(
                        `Recurso '${endpoint}' no encontrado.`, 404
                    ));
                    return;
                }

                resolve(respuestaOk<T>(recurso as T));

            }, 1500);
        });
    }
}

export const apiClient = new ApiClient();