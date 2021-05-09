import { Injectable } from '@angular/core';
import Hero from './hero';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }
  createDb() {
    // 对应的 api/heroes
    const heroes:Hero[] = [
      { id: 11, name: 'Dr Nice',age:12 },
      { id: 12, name: 'Narco' ,age:12 },
      { id: 13, name: 'Bombasto' ,age:12 },
      { id: 14, name: 'Celeritas' ,age:12 },
      { id: 15, name: 'Magneta' ,age:12 },
      { id: 16, name: 'RubberMan',age:12  },
      { id: 17, name: 'Dynama' ,age:12 },
      { id: 18, name: 'Dr IQ',age:12  },
      { id: 19, name: 'Magma',age:12  },
      { id: 20, name: 'Tornado',age:12  }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  
}
