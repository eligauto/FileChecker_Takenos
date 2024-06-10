import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function MaxFileSize(maxSize: number, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'maxFileSize',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [maxSize],
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [maxSize] = args.constraints;
          return value.size <= maxSize;
        },
        defaultMessage(args: ValidationArguments) {
          const [maxSize] = args.constraints;
          return `File size must not exceed ${maxSize} bytes`;
        },
      },
    });
  };
}