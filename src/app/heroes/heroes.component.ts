import { Component, OnInit } from '@angular/core';
// 装饰器 指定元数据
import Hero from '../hero';
@Component({
  selector: 'app-heroes', // name => type
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  public hero: Hero = { name: 'JackWorld', age: 18, id: 1 };

  constructor() {}
  // 生命周期钩子 hook
  ngOnInit(): void {
    console.log(this.hero);
  }
}
