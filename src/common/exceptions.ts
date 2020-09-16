export class BussinesException extends Error {
  constructor(public code: string, public message: string) {
    super(message);
    Object.setPrototypeOf(this, BussinesException.prototype);
  }
}
