import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  logs: string[] = [];

  constructor() { }

  log(message: string): void{
    this.logs.push(message);
    console.log(message);
  }

}
