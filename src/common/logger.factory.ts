import { Logger } from '@nestjs/common';

export namespace LoggerFactory {
  export function getLogger(context: string): Logger {
    return new Logger(context);
  }
}
