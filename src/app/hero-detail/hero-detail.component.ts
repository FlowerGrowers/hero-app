/*
 * @Author: your name
 * @Date: 2021-05-09 23:13:06
 * @LastEditTime: 2021-05-10 00:08:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng\hero-app\src\app\hero-detail\hero-detail.component.ts
 */
import { HeroService } from './../hero.service';
import { Component, OnInit, Input } from '@angular/core';
import Hero from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  @Input() hero: Hero;
  ngOnInit(): void {
    this.getHero();
  }

  getHero() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  back() {
    this.location.back();
  }

  save(){
   this.heroService.updateHero(this.hero).subscribe(()=>this.back())
  }
}
