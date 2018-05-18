import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {            //add message to the cache
    this.messages.push(message);
  }

  clear() {                         //clear message cache
    this.messages = [];
  }
}