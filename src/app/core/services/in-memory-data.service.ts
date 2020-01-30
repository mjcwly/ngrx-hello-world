// Core imports...
import { Injectable } from '@angular/core';

// Third-party imports...
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const greetings = [
      { greetingId: 1, greetingText: "Hello" },
      { greetingId: 2, greetingText: "Hi" },
      { greetingId: 3, greetingText: "Howdy" },
      { greetingId: 4, greetingText: "Hey" },
      { greetingId: 5, greetingText: "Hiya" }
    ];

    return { greetings };
  }
}
