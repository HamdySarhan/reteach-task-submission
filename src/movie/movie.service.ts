import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { addPagination } from '../common/helper/add-pagination'
import { Movie } from '../orm/entities/movie.entity'
import { MoviesFindInput } from './interfaces/movies-find.input'

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>
  ) {}

  public async findManyAndCount(params: MoviesFindInput): Promise<[Movie[], number]> {
    const { searchTerm, ...pagination } = params
    const queryBuilder = this.movieRepository.createQueryBuilder('movie')

    if (searchTerm) {
      queryBuilder.where('movie.title ILIKE :searchTerm', { searchTerm: `%${searchTerm}%` })
    }

    addPagination(queryBuilder, pagination)

    return queryBuilder.getManyAndCount()
  }
}
