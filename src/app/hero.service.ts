import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import sleep2000ms, { heroList } from './heroList';
import Hero from './hero';
import { Observable, from, of, pipe } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes';
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  async getHeroesAsync(): Promise<Hero[]> {
    this.log('First message!!!');
    return await sleep2000ms();
  }
  getHeroes(): Observable<Hero[]> {
    this.log('First message!!!');
    // return of(heroList);
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((_) => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }
  getHero(id: number): Observable<Hero> {
    this.log(`HeroService fetch ${id}`);
    let url = `${this.heroesUrl}/${id}`;
    return this.http
      .get<Hero>(url)
      .pipe(
        tap(
          (_) => this.log(`fetched hero id =${id}`),
          catchError(this.handleError('getHero'))
        )
      );
  }

  updateHero(hero: Hero): Observable<number> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((_) => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((_) => this.log('add hero ' + hero.name)),
      catchError(this.handleError<any>('addHero'))
    );
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    let url = `${this.heroesUrl}/${typeof hero === 'number' ? hero : hero.id}`;
    return this.http.delete(url, this.httpOptions).pipe(
      tap((_) => this.log(`delete hero id=${hero}`)),
      catchError(this.handleError<any>('deleteHero'))
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`found heroes matching "${term}"`)
          : this.log(`no heroes matching "${term}"`)
      ),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  log(message: string) {
    this.messageService.add(`HeroService ${message}`);
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed ${error.message}`);

      return of(result as T);
    };
  }
}
