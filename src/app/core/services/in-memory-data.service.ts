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

    const worlds = [
      { worldId: 1, worldName: "World" },
      { worldId: 2, worldName: "Cybertron" },
      { worldId: 3, worldName: "Krypton" },
      { worldId: 4, worldName: "Saturn" },
      { worldId: 5, worldName: "Thundera" },
      { worldId: 6, worldName: "Mars" },
      { worldId: 7, worldName: "Solaris" },
      { worldId: 8, worldName: "Button Moon" },
    ];

    return { greetings, worlds };
  }
}
