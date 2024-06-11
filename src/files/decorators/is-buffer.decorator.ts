import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsBuffer(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isBuffer',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return value instanceof Buffer;
        },
        defaultMessage(args: ValidationArguments) {
          return 'El campo $property debe ser un Buffer';
        }
      },
    });
  };
}
