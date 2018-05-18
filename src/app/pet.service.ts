import { Injectable } from '@angular/core';
import { Pet } from './pet';
import { PETS } from './pets/mock-pets';
import { Observable } from 'rxjs/Observable';               //key classes of RxJS library
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PetService {

  getPets(): Observable<Pet[]> {                          //replaced with standard getPets method
    this.messageService.add('Pet is fetching');   //send message when pets are fetched
    return of(PETS);
  }
  getPet(id: number): Observable<Pet> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`You fetched pet ${id}. You must be proud`);
    return of(PETS.find(hero => hero.id === id));
  }

  constructor(private messageService: MessageService) { }  //inject messageservice into petservice 

}
