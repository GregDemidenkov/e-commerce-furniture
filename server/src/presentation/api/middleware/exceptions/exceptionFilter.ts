import { ExceptionFilter, Catch, ArgumentsHost, } from '@nestjs/common';
import { Response } from 'express';


@Catch()
export class HttpExceptionFilter implements ExceptionFilter {

    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<Response>()
        
        let status: number
        let message: string

        message = "Internal serever error"
        status = 500

        response
        .status(status)
        .json({
            message: message,
        })
    }
    
}
