import { Component, OnInit } from '@angular/core';
// 装饰器 指定元数据
import Hero from '../hero';
import heroList from '../heroList';
@Component({
  selector: 'app-heroes', // name => type
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

  public heroList = heroList;
  constructor() {}

  changeHero(hero: Hero) {
    this.selectedHero = hero;
  }

  // 生命周期钩子 hook
  ngOnInit(): void {
    console.log(this.hero);
  }
}
