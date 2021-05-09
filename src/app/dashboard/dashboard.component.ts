import { HeroService } from './../hero.service';
import { Component, Input, OnInit } from '@angular/core';
import Hero from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public heroes: Hero[] = [];
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    console.log(1);
    this.getHeroes();
  }

  getHeroes() {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
