import { MappedException } from 'src/constants/exception.maps';

export class BussinesException extends Error {
  public PARAMETER_WILDCARD: string = '{}';

  constructor(public mappedException: MappedException, parameters?: any[]) {
    super(mappedException.message);

    if (parameters) {
      let formatedMessage: string = mappedException.message;
      parameters.forEach((parameter, index) => {
        const wildCard =
          this.PARAMETER_WILDCARD[0] + index + this.PARAMETER_WILDCARD[1];
        formatedMessage = formatedMessage.replace(wildCard, parameter);
      });
      mappedException.message = formatedMessage;
    }

    Object.setPrototypeOf(this, BussinesException.prototype);
  }
}
