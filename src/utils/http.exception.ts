export default class HttpException extends Error {
    constructor(public message: string = 'Error', public statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
    }
}
