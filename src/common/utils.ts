import { exception } from 'console';

export class EnsureThat {
  static isTrue(value: boolean, message: string) {
    if (value == null) throw new Error(message);
  }

  static isNotNull(value: any, message: string) {
    if (value == null) throw new Error(message);
  }
}
