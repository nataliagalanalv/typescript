interface RespuestaAPI<T> {
    success: boolean;
    data: T | null;
    message: string;
    statusCode: number;
    timestamp: string;
}

interface ErrorAPI {
    code: string;
    detail: string;
}

export { RespuestaAPI, ErrorAPI };