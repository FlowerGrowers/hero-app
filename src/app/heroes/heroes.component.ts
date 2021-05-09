/*
 * @Author: your name
 * @Date: 2021-05-09 23:13:06
 * @LastEditTime: 2021-05-10 00:28:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng\hero-app\src\app\heroes\heroes.component.ts
 */
import { MessageService } from './../message.service';
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
// 装饰器 指定元数据
import Hero from '../hero';

@Component({
  selector: 'app-heroes', // name 组件名 <app-heroes></app-heroes>
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  public hero: Hero = { name: 'JackWorld', age: 18, id: 1 };
  // 1. 可以配置初始值
  // 2. 可以使用*ngIf指令
  public selectedHero: Hero = {
    id: 0,
    name: 'xxx',
    age: 100,
  };

  public heroList: Hero[];
  // 3. 组件只需要展示数据 不要去把数据存储在组件逻辑中
  constructor(
    private heroService: HeroService,
    public messageService: MessageService
  ) {}

  changeHero(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add('hero ' + hero.name + ' go!');
  }

  // 经典发布订阅用法
  getHeroes() {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroList = heroes));
  }

  async getHeroesAsync() {
    let heroList = await this.heroService.getHeroesAsync();
    this.heroList = heroList;
  }

  add(name:string){
    name = name.trim();
    if(!name) return ;
    this.heroService.addHero({name} as Hero).subscribe(hero=>{this.heroList.push(hero)})
  }

  delete(hero:Hero){
    this.heroList = this.heroList.filter(h=>h!==hero);
    this.heroService.deleteHero(hero).subscribe()
  }

  // 生命周期钩子 hook
  ngOnInit(): void {
    // this.getHeroesAsync();
    this.getHeroes();
  }
}
