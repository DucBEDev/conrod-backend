import { applyDecorators } from '@nestjs/common';
import { IsNumber, IsPositive, ValidationOptions } from 'class-validator';

/**
 * Check if the value is a positive number greater than zero with, at the most, 2 decimal places
 */
export const IsCurrency = (
  validationOptions?: ValidationOptions,
): PropertyDecorator =>
  applyDecorators(
    IsNumber({ maxDecimalPlaces: 2 }, validationOptions),
    IsPositive(validationOptions),
  );
