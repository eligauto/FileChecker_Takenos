import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsMimeType(allowedMimeTypes: string[], validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isMimeType',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [allowedMimeTypes],
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [allowedMimeTypes] = args.constraints;
          return allowedMimeTypes.includes(value);
        },
        defaultMessage(args: ValidationArguments) {
          const [allowedMimeTypes] = args.constraints;
          return `Mime type must be one of the following: ${allowedMimeTypes.join(', ')}`;
        },
      },
    });
  };
}
