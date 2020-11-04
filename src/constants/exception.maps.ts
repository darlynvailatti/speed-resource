export interface MappedException {
  code: string;
  message: string;
}

export namespace TestBusinessExceptions {
  const errorCodePrefix: string = 'TEST.';

  export const TEST_NOT_FOUND: MappedException = {
    code: errorCodePrefix + 'NOT_EXIST',
    message: 'Test {} not found',
  };

  export const TEMAPLATE_IS_MANDATORY_CREATE_NEW_TEST: MappedException = {
    code: errorCodePrefix + 'TEMPLATE_IS_MANDATORY_ON_TEST_CREATION',
    message: 'Template is mandatory in order to create new Test',
  };

  export const ERROR_ON_TEST_CREATION: MappedException = {
    code: errorCodePrefix + 'ERROR_ON_CREATION',
    message: 'An error occured while creating new test: {0}',
  };
}

export namespace TeamBusinessExceptions {
  const errorCodePrefix: string = 'TEAM.';

  export const TEAM_WITH_NAME_ALREADY_EXIST: MappedException = {
    code: errorCodePrefix + 'DUPLICATED_NAME',
    message: 'Already exists one team with name: {0}',
  };
}

export namespace TemplateBusinessExceptions {
  const errorCodePrefix: string = 'TEMPLATE.';
  export const TEMPLATE_IS_NOT_VALID: MappedException = {
    code: errorCodePrefix + 'IS_NOT_VALID',
    message: 'Template is not valid. Cause: {0}',
  };

  export const TEMPLATE_NOT_EXIST: MappedException = {
    code: errorCodePrefix + 'NOT_EXIST',
    message: 'Template {0} does not exist',
  };
}
