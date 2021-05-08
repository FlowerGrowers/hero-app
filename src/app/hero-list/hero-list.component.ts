import { Component, OnInit } from '@angular/core';
import heroList from '../heroList';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {
  public heroList = heroList;

  constructor() {}

  ngOnInit(): void {}
}
