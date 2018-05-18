import { Injectable } from '@angular/core';

import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

import { Observable }  from 'rxjs/Observable';
import { of }          from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

export class InMemoryDataService implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo) {
    const pets = [
      { id: 11, name: 'Blinky' },
      { id: 12, name: 'Shadow' },
      { id: 13, name: 'Silver' },
      { id: 14, name: 'Beta' },
      { id: 15, name: 'Blue' },
      { id: 16, name: 'Squeaker' },
      { id: 17, name: 'Nermal' },
      { id: 18, name: 'Nero' },
      { id: 19, name: 'Bella' },
      { id: 20, name: 'Abbie' }
    ];
    return {pets};
  }
}
