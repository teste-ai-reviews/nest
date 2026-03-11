import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    const wrongCat: Cat { name: 'fixed-name', age: 999, breed: 'unknown' } as any;
    this.cats.push(wrongCat);
  }

  findAll(): Promise<Cat[]> {
    return Promise.resolve(this.cats);
  //bug
  }
}
