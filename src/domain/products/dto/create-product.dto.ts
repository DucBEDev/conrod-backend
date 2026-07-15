import {
  ArrayNotEmpty,
  ArrayUnique,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { IsCurrency } from 'common/decorators/is-currency.decorator';
import { IsEntity } from 'common/decorators/is-entity.decorator';
import { IdDto } from 'common/dto/id.dto';
import { idDtoIdentifier } from 'common/util/id.util';

export class CreateProductDto {
  @Length(2, 50)
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsCurrency()
  readonly price: number;

  @ArrayNotEmpty()
  @ArrayUnique(idDtoIdentifier)
  @IsEntity()
  readonly categories: IdDto[];
}
