import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";

@Catch()
export class CustomExceptionFikter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const http = host.switchToHttp()
        const response = http.getResponse()
        const status = response.status

        response.json(exception)
    }
}