import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { BussinesException } from './exceptions';

@Catch(BussinesException)
export class BussinesExceptionFilter
  implements ExceptionFilter<BussinesException> {
  catch(exception: BussinesException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      timestamp: new Date().toISOString(),
      path: request.url,
      errorCode: exception.code,
      message: exception.message,
    });
  }
}
