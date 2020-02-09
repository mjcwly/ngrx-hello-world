let appState = 
{
  greetingState: {
    ids: [1,4,2,5,3],
    entities: {
      '1': { greetingId: 1, greetingText: 'Hello' },
      '2': { greetingId: 2, greetingText: 'Hi' },
      '3': { greetingId: 3, greetingText: 'Howdy' },
      '4': { greetingId: 4, greetingText: 'Hey' },
      '5': { greetingId: 5, greetingText: 'Hiya' }
    },
    selectedGreetingId: null
  },
  worldState: {
    ids: [8,2,3,6,1,4,7,5],
    entities: {
      '1': { worldId: 1, worldName: 'Middle Earth' },
      '2': { worldId: 2, worldName: 'Cybertron' },
      '3': { worldId: 3, worldName: 'Krypton' },
      '4': { worldId: 4, worldName: 'Saturn' },
      '5': { worldId: 5, worldName: 'Thundera' },
      '6': { worldId: 6, worldName: 'Mars' },
      '7': { worldId: 7, worldName: 'Solaris' },
      '8': { worldId: 8, worldName: 'Button Moon' }
    },
    selectedWorldId: null
  }
}