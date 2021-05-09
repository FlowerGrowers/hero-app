/*
 * @Author: your name
 * @Date: 2021-05-09 23:13:06
 * @LastEditTime: 2021-05-10 00:37:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng\hero-app\src\app\hero.service.ts
 */
import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import sleep2000ms, { heroList } from './heroList';
import Hero from './hero';
import { Observable, from, of, pipe } from 'rxjs';
import {catchError,map,tap} from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes';
  public httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private messageService: MessageService,private http:HttpClient) {}

  async getHeroesAsync(): Promise<Hero[]> {
    this.log('First message!!!');
    return await sleep2000ms();
  }
  getHeroes(): Observable<Hero[]> {
    this.log('First message!!!');
    // return of(heroList);
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes',[]))
    );
  }
  getHero(id: number): Observable<Hero> {
    this.log(`HeroService fetch ${id}`);
    let url = `${this.heroesUrl}/${id}`;
    // return of(heroList.find((hero) => hero.id == id));
    return this.http.get<Hero>(url).pipe(
      tap(_=>this.log(`fetched hero id =${id}`),catchError(this.handleError('getHero')))
    )
  }

  updateHero(hero:Hero):Observable<number>{
    console.log(hero);
    // return of(hero.id)
    return this.http.put(this.heroesUrl,hero,this.httpOptions).pipe(tap(_ => this.log(`updated hero id=${hero.id}`)),
    catchError(this.handleError<any>('updateHero')))
  }

  addHero(hero:Hero):Observable<Hero>{

    return this.http.post(this.heroesUrl,hero,this.httpOptions).pipe(
      tap(_=>this.log('add hero '+ hero.name)),
      catchError(this.handleError<any>('addHero'))
    )
  }

  deleteHero(hero:Hero | number):Observable<Hero>{
    let url = `${this.heroesUrl}/${typeof hero === 'number' ?  hero: hero.id}`;
    return this.http.delete(url,this.httpOptions).pipe(
      tap(_=>this.log(`delete hero id=${hero}`)),
      catchError(this.handleError<any>('deleteHero'))
    )
  }

  log(message:string){
    this.messageService.add(`HeroService ${message}`);
  }
  handleError<T>(operation = 'operation', result?: T){
    return (error:any):Observable<T>=>{
      console.error(error);
      this.log(`${operation} falied ${error.message}` )
    
      return of(result as T)
    }
  }
}
