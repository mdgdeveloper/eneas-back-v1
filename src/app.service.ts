import { Injectable } from '@nestjs/common';
import { Dummy } from './common/types/dummy.type';
import { data } from './data/dummydata';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getData(): Dummy[] {
    return data;
  }
}
