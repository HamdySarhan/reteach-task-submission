import { Type } from 'class-transformer'
import { IsOptional } from 'class-validator'
import { PaginationInput } from '../../common/input/pagination.input'

export class MoviesFindInput extends PaginationInput {
  @Type(() => String)
  @IsOptional()
  searchTerm?: string
}
