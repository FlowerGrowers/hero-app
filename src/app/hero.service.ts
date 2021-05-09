import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import sleep2000ms, { heroList } from './heroList';
import Hero from './hero';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  async getHeroesAsync(): Promise<Hero[]> {
    this.messageService.add('First message!!!');
    return await sleep2000ms();
  }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('First message!!!');
    return of(heroList);
  }
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`hero detail ${id}`);
    return of(heroList.find((hero) => hero.id == id));
  }
}
